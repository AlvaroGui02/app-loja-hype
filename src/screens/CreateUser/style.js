import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 20
    },
    alert: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 10,
        width: '100%',
        borderRadius: 40
    },
    button: {
        backgroundColor: '#008080',
        width: '100%',
        borderRadius:40,
        marginTop: 20
    },
    txtBtn:{
        padding: 10,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default styles;