import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'

import IcedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style = {styles.container}>
    <ImageBackground 
    source={IcedCoffeeImg}
    resizeMode='cover'
    style={styles.image}
    >
      <Text style = {styles.title}>Coffe Shop!</Text>

      <Link href="/contact" style={{marginHorizontal: "auto"}} asChild>
      <Pressable style={styles.button}>
      < Text style={styles.buttonText}>Contact Us</Text>
      </Pressable>
      </Link>
      <Link href="/menu" style={{marginHorizontal: "auto"}} asChild>
      <Pressable style={styles.button}>
      < Text style={styles.buttonText}>Our Menu</Text>
      </Pressable>
      </Link>
      
      </ImageBackground>
    </View>
  )
}

export default app

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120,
  },
  link: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: 60,
    width: 150,
    padding: 6,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    color: 'white',
  },
 })