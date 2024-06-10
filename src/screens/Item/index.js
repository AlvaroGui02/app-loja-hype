import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, ref, set, remove } from "firebase/database";
import { getStorage, ref as refS, deleteObject } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
const db = getDatabase();
const auth = getAuth();

export default function InfoVeiculo({ navigation, route }) {
    const [item, setItem] = useState("")
    const [preco, setPreco] = useState("")
    const [status, setStatus] = useState("")
    const [urlImage, setUrlImage] = useState("")

    useEffect(() => {
        recuperarDados();
    }, [])

    const recuperarDados = () => {
        onValue(ref(db, 'loja/' + auth.currentUser.uid + '/' + route.params.id), (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setItem(data.item || "")
                setPreco(data.preco || "")
                setStatus(data.status || "")
                setUrlImage(data.urlImage || "")
            }
        });
    }

    const deletarVenda = () => {
        return Alert.alert(
            "Excluir item",
            "Você tem certeza que deseja remover esse item?",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Confirmar",
                    onPress: () => {
                        const storage = getStorage();
                        const url = refS(storage, urlImage);

                        deleteObject(url)
                            .then(() => {
                                console.log('Imagem do item deletado com sucesso');
                            }).catch((error) => {
                                console.error('Erro ao deletar imagem do item:', error);
                            });

                        remove(ref(db, 'loja/' + auth.currentUser.uid + '/' + route.params.id))
                            .then(() => {
                                console.log('Item deletado com sucesso');
                                navigation.navigate('Tabs');
                            })
                            .catch((error) => {
                                console.error('Erro ao deletar item:', error);
                            });
                    }
                }
            ]
        );
    };

    const finalizarCompra = () => {
        const taskListRef = ref(db, 'loja/' + auth.currentUser.uid + '/' + route.params.id);
        set(taskListRef, {
            item: item,
            preco: preco,
            urlImage: urlImage, // Salva a URL da imagem no Realtime Database
            status: 'Indisponível'
        })
            .then(() => {
                console.log('Venda concluida com sucesso!');
                navigation.navigate('Tabs');
            })
            .catch((error) => {
                console.error('Erro ao cadastrar venda:', error);
            });
    }


    return (
        <View style={styles.container}>
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.alterar} onPress={() => navigation.navigate('EditarItem', { id: route.params.id })}>
                    <Text style={styles.txtAlterar}>Editar item</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deletar} onPress={() => deletarVenda()}>
                    <Text style={styles.txtDeletar}>Deletar item</Text>
                </TouchableOpacity>
            </View>

            {urlImage ? <Image source={{ uri: urlImage }} style={styles.imagem} /> : null}

            <Text style={styles.item}>{item}</Text>
            <Text style={styles.preco}>R$ {preco}</Text>

            <TouchableOpacity onPress={() => finalizarCompra(route.params.id)} style={[styles.btnVendido, status === 'Indisponível' && styles.btnOpaco]} disabled={status === 'Indisponível'}>
                <Text style={styles.txtBtnVendido}>Finalizar Compra</Text>
            </TouchableOpacity>

        </View>
    )
}