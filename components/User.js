import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardItem}>
        <Image source={{}} style={styles.image} />
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.text}>Name : Jhon Doe</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.text}>Followers : 20</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.text}>Followings : 30</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.text}>Repositories : 10</Text>
      </View>
    </View>
  );
}

export default User

const styles = StyleSheet.create({
    card: {
        width: '80%',
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 80,
        paddingBottom: 20,
    },

    cardItem: {
        paddingTop: 10,
    },

    text: {
        color: 'purple',
        fontSize: 20,
    }
})