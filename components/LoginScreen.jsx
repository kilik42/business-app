import { View, Text } from 'react-native'
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen() {
  return (
    <SafeAreaView>
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 100
      }}
    
    >
    <Image source={require('./../assets/images/icon.png')} style={{ width: 200, height: 200 }} />
    </View>

    <View style={styles.subContainer}>
      <Text style={{ fontSize: 20, fontFamily: 'outfit-bold', textAlign: 'center' }}>Welcome to Outfit</Text>
      <Text style = {styles.text}> Find your business near your and post your own business to your community</Text>
      </View> 
        
        <TouchableOpacity>
          <Text style={{ fontSize: 20, fontFamily: 'outfit-bold', textAlign: 'center', marginTop: 20 }}>Sign In</Text>
        </TouchableOpacity>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  subContainer: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'outfit-bold',
    marginTop: 10,
    color: '#000',
  }
})