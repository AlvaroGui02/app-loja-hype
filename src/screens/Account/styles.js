import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        paddingTop: 40
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 50
    },
    nome: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 15
    },
    email: {
        color:'#fff',
        fontSize: 20,
        marginLeft: 15
    },
    btnSair: {
        backgroundColor: '#00CED1',
        marginTop: 20,
        borderRadius: 40,
        padding: 10,
        width: '70%',
        alignSelf: 'center',
        marginTop: 50
    },
    txtSair: {
        color: '#fff',
        textAlign:'center'
    },
    info: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },
    box: {
        position: 'absolute',
        bottom: 50,
        left: 60
    }
});

export default styles;