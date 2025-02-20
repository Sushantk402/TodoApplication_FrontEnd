import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeContainer:{
        flex:1,
    },
    mainTitle :{
        minHeight: 50,
        flexDirection:'row',
        backgroundColor : 'red',
        padding : 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        margin:20,
    },
    row:{
        alignItems:'center',
        flexDirection:'row'
    },
    bottomtap:{
        position: "absolute",
        bottom: 0,
        left: 10,
        right: 10,
        backgroundColor: "#fff", 
        padding: 10,
    },
    text :{
        fontSize:20,
        color:'black',
        fontFamily:'Roboto'
    },
    buttons:{
        borderRadius:20,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:"center"
        
    },
    buttonContainer:{
        marginTop : 20,
        alignItems: 'center',
        
    },
    textInput:{
        fontSize:20,
        color:'black',
        fontFamily:'Roboto',
        borderColor:'Black',
        borderWidth: 1,
        borderRadius:50,
        alignItems:'center',
        width: '60%',
        alignSelf:'flex-start',
        paddingHorizontal: 10,
        margin:'2%'
    },
    inputRow:{
        marginBottom:2,
        alignItems:'center',
        flexDirection:'row'
    },
    contentContainer:{
        paddingBottom: 80,
    },
    editButton:{
        width: 30,
        height: 30,
        backgroundColor: '#bfb0b0', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin:3
    },
    editButtonText:{
        fontSize:10,
        color:'black'
    },
    checkbox :{
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer :{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:5,
        marginRight:0
    },
    checkmark:{
        color: 'white',
        fontSize: 18,
    },
    checkboxchecked:{
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },

})


export default styles;