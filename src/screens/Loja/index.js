import { View, Text, TouchableOpacity, FlatList, Modal, Pressable, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, query, ref, orderByChild } from "firebase/database";
import { getAuth } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();

export default function Veiculos({ navigation }) {
    const [vendas, setVendas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const listaVendas = query(ref(db, 'loja/' + auth.currentUser.uid), orderByChild('status'));
        onValue(listaVendas, (snapshot) => {
            const lista = []
            snapshot.forEach((data) => {
                lista.push({ ...data.val(), id: data.key });
            });
            setVendas(lista)
        });
    }, [])


    return (
        <View style={styles.container}>
            <FlatList
            contentContainerStyle={styles.listContent}
            numColumns={2}
                showsVerticalScrollIndicator={false}
                data={vendas}
                renderItem={({ item }) =>
                <View style={styles.tela}>
                    <View style={styles.tarefa}>
                        <View style={styles.areaImagem}>
                            {item.urlImage ? <Image source={{ uri: item.urlImage }} style={styles.imagem} /> : null}
                        </View>
                        <View>
                            <Text style={styles.item}>{item.item}</Text>
                            <Text style={styles.preco}>R$ {item.preco}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Item', { id: item.id })} >
                                <Text style={styles.txtButton}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                }
            />
        </View>
    )
}