import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React,{useState} from 'react'
import User from '../components/User'



export default function index() {

    const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
        <Text style={styles.textHeader}>GITHUB API</Text>

        <View style={styles.detailsContainer}>
            <User/>
        </View>

        <TextInput 
        style={styles.textInput}
        placeholder='Enter your Github Username'
        value={username}
        onChangeText={()=>setUsername()}
        />

        <Pressable style={styles.button} onPress={()=>{}}>
            <Text style={styles.textButton}>SUBMIT</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textHeader: {
        color: 'orange',
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
        marginTop: 20,
        borderBottomWidth: 5,
        borderBottomColor: 'purple'
    },

    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput: {
        borderColor: 'orange',
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        width: '90%',
        textAlign: 'center',
        marginBottom: 20,
    },
    
    button: {
        padding: 30,
        alignSelf:'center',
        borderRadius: 10,
        backgroundColor: 'blue',
        width: '50%',
        alignItems: 'center'
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
    }

})