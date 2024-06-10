import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    
    listContent: {
        justifyContent: 'space-between',
    },

    tela: {
        width: '50%',
        flexDirection: 'column',
        padding: 5
    },

    tarefa: {
        backgroundColor: "#fff",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 4,
    },

    areaImagem: {
        alignItems: 'center'
    },

    item: {
        marginBottom: 10,
        fontSize: 15
    },

    preco: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    
    button: {
        backgroundColor: '#00CED1',
        marginTop: 10,
        borderRadius: 40,
    },
    txtButton: {
        textAlign: 'center',
        padding: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    },

    cancel: {
        color: '#F00'
    },

    imagem: {
        width: 150, 
        height: 100, 
        borderRadius: 5
    },

    disp: {
        color: 'red',
    },

    status: {
        color: 'green',
        textAlign: 'right'
    },
});

export default styles