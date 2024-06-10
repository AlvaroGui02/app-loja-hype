import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { firebase } from '../../services/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(null);

    function validar(){
        if(email==""){
            setErrorLogin("Insira o e-mail.");
        }else if(password==""){
            setErrorLogin("Insira a senha.");
        }else {
            setErrorLogin(null);
            login();
        }
    }

    function login(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setEmail("")
                setPassword("")
                setErrorLogin(null)
                navigation.navigate('Tabs');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorLogin(errorMessage);
            });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo.jpg')} />

            {errorLogin != null && (
                <Text style={styles.alert}>{errorLogin}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validar}
            >
                <Text style={styles.txtButton}>Entrar</Text>                
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCriarConta}
                onPress={()=> navigation.navigate('CreateUser')}
            >
                <Text style={styles.txtButton}>Criar Usuário</Text>                
            </TouchableOpacity>
        </View>
    )
}