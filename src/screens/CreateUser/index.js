import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./style";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();

export default function CreateUser({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorCreateUser, setErrorCreateUser] = useState(null);

    function validar() {
        if (nome == "") {
            setErrorCreateUser("Insira seu nome.");
        } else if (email == "") {
            setErrorCreateUser("Insira seu e-mail.");
        } else if (password == "") {
            setErrorCreateUser("Insira sua senha.");
        } else {
            setErrorCreateUser(null);
            cadastrar();
        }
    }

    const cadastrar = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(db, 'users/' + user.uid), {
                    nome: nome,
                    email: email
                  });
                  navigation.navigate('Tabs');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorCreateUser(errorMessage);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            
            {errorCreateUser != null && (
                <Text style={styles.alert}>{errorCreateUser}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry= {true}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validar}
            >
                <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}