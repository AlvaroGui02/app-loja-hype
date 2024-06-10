import React, { useState, useEffect } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();

export default function Account({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const recuperarDados = () => {
        const URL = ref(db, 'users/' + auth.currentUser.uid);
        onValue(URL, (snapshot) => {
            setNome(snapshot.val().nome);
            setEmail(snapshot.val().email);
        });
    }

    useEffect(() => {
        recuperarDados();
    }, []);

    const logoff = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dados da Conta</Text>
            <Text style={styles.nome}>Usuário: {nome}</Text>
            <Text style={styles.email}>E-mail: {email}</Text>

            <TouchableOpacity style={styles.btnSair}
                onPress={logoff}
            >
                <Text style={styles.txtSair}>Sair</Text>
            </TouchableOpacity>

            <View style={styles.box}>
                <Text style={styles.info}>Desenvolvedores: </Text>
                <Text style={styles.info}>Álvaro Guilherme Barreto dos Santos</Text>
                <Text style={styles.info}>Israel Lucas Lima Campos</Text>
                <Text style={styles.info}>Rubens de Sá Filho</Text>
            </View>
        </View>
    )
}