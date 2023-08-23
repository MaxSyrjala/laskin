import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, Alert, Button, StyleSheet, View, TextInput } from 'react-native';

export default function App() {
  const [tulos, setTulos] =React.useState(0)
  const [numero1, setNumero1] = React.useState(0)
  const [numero2, setNumero2] = React.useState(0)

  const buttonPlus = () => {
    setTulos(parseFloat(numero1) + parseFloat(numero2));
  }

  const buttonMinus = () => {
    setTulos(parseFloat(numero1) - parseFloat(numero2))
  }

  return (

    
    <View style={styles.container}>
      
      <Text style={styles}>{"Tulos: "+tulos}</Text>

      <TextInput 
      style={{width: 200, borderColor: "blue", borderWidth: 1  }}
      keyboardType="numeric"
      defaultValue={numero1}
      onChangeText={numero1 => setNumero1(numero1)} value={numero1}
    
      />

<TextInput
      style={{width: 200, borderColor: "blue", borderWidth: 1  }}
      keyboardType="numeric"
      defaultValue={numero2}
      onChangeText={numero2 => setNumero2(numero2)} value={numero2}
      />


      <Button color="green" onPress={buttonPlus} title="+" />
      <StatusBar style="auto" />
      <Button color="blue" onPress={buttonMinus} title="-" />
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
