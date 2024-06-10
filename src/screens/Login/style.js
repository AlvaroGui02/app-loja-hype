import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 30,
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    logo :{
        width: 360,
        height: 250,
        marginBottom: 20
    },
    input: {
        backgroundColor: '#fff',
        padding: 13,
        fontSize: 18,
        width: '100%',
        borderRadius: 40,
        marginBottom: 20
    },
    alert: {
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#00CED1',
        marginTop: 20,
        borderRadius: 40,
    },
    txtButton: {
        textAlign: 'center',
        padding: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    btnCriarConta: {
        backgroundColor: '#000',
        borderWidth: 2,
        borderColor: '#00CED1',
        marginTop: 20,
        borderRadius: 30,
    },

});

export default styles