import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref as refS, uploadBytes, getDownloadURL } from 'firebase/storage';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
const db = getDatabase();
const auth = getAuth();

export default function EditarVeiculo({ navigation, route }) {
    const [item, setItem] = useState("")
    const [preco, setPreco] = useState("")
    const [urlImage, setUrlImage] = useState("")
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(true);
    const [errorEditarVenda, setErrorEditarVenda] = useState(null)

    useEffect(() => {
        onValue(ref(db, 'loja/' + auth.currentUser.uid + '/' + route.params.id), (snapshot) => {
            setItem(snapshot.val().item)
            setPreco(snapshot.val().preco)
            setUrlImage(snapshot.val().urlImage)
        });
    }, [])

    const validar = () => {
        if (item == "") {
            setErrorEditarVenda("Informe o item")
        } else if (preco == "") {
            setErrorEditarVenda("Informe o preço")
        } else {
            setErrorEditarVenda(null)
            editarItem()
        }
    }

    const editarItem = () => {
        const taskListRef = ref(db, 'loja/' + auth.currentUser.uid + '/' + route.params.id);
        set(taskListRef, {
            item: item,
            preco: preco,
            urlImage: urlImage, // Salva a URL da imagem no Realtime Database
        })
            .then(() => {
                console.log('Venda cadastrada com sucesso!');
                navigation.navigate('Tabs');
            })
            .catch((error) => {
                console.error('Erro ao cadastrar venda:', error);
                setErrorEditarVenda('Erro ao cadastrar venda. Por favor, tente novamente.');
            });
    }

    const selecionarImagem = async () => {
        // Solicita permissões para acessar a galeria de fotos
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos da permissão para acessar a galeria de fotos!');
            return;
        }

        // Abre a galeria de fotos e permite ao usuário selecionar uma imagem
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            uploadImage(result.assets[0].uri);
        }
    };

    const uploadImage = async (uri) => {
        const storage = getStorage();
        const response = await fetch(uri);
        const blob = await response.blob();
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const storageRef = refS(storage, filename);

        try {
            await uploadBytes(storageRef, blob);

            const url = await getDownloadURL(storageRef);
            setUrlImage(url);
            setImage2(false);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={styles.container}>
            {errorEditarVenda != null && (
                <Text style={styles.alert}>{errorEditarVenda}</Text>
            )}

            {image2 && urlImage && <Image source={{ uri: urlImage }} style={styles.imagemSelecionada} />}
            {image && <Image source={{ uri: image }} style={styles.imagemSelecionada} />}

            <TouchableOpacity style={styles.button} onPress={selecionarImagem}>
                <Text style={styles.textButton}>Selecionar Imagem</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder='Nome do item'
                value={item}
                onChangeText={setItem}
            />

            <TextInput
                style={styles.input}
                placeholder='Preço'
                value={preco}
                onChangeText={setPreco}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validar}
            >
                <Text style={styles.textButton}>Concluir</Text>
            </TouchableOpacity>
        </View>
    )
}