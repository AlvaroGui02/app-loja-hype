import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff'
    },

    botoes: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 20
    },

    item: {
        fontSize: 25,
    },

    preco: {
        fontSize: 40,
        marginTop: 20,
        fontWeight: 'bold',
    },

    cancel: {
        color: '#F00'
    },

    imagem: {
        width: 400,
        height: 300,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center'
    },

    alterar: {
        backgroundColor: '#000',
        borderRadius: 40,
        padding: 3,
        width: 100,
        marginRight: 5
    },
    
    deletar: {
        backgroundColor: 'red',
        borderRadius: 40,
        padding: 3,
        width: 100
    },

    txtAlterar: {
        color: '#fff',
        textAlign: 'center'
    },
    
    txtDeletar: {
        color: '#fff',
        textAlign: 'center'
    },

    btnVendido: {
        backgroundColor: '#00CED1',
        width: 300,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 40,
        marginTop: 50
    },

    txtBtnVendido: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    btnOpaco: {
        opacity: 0
    }
});

export default styles