import React from "react";
import { View, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Buttons, Container, PrimaryText, TO, TOText } from "./styled";


const Index = () => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <Container>
      <Buttons>
      <PrimaryText>Camera</PrimaryText>
      <TO>
        <TOText>Abrir album</TOText>
      </TO>
      </Buttons>
    </Container>
    
  )
}

export default Index