import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alert: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        borderRadius: 40,
        backgroundColor: '#ddd',
        padding: 20,
        marginBottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: '#00CED1',
        padding: 10,
        borderRadius: 40,
        marginBottom: 20,
        width: '100%'
    },
    textButton: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },
    imagemSelecionada: {
        width: 350, 
        height: 200,
        marginBottom: 20
    }
});

export default styles