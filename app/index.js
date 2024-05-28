import React, {useState} from "react";
import { View, Text, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { launchCameraAsync } from "expo-image-picker";
import {CameraView, useCameraPermissions} from 'expo-camera'
import { Buttons, Container, ImagePhoto, PrimaryText, TO, TOText } from "./styled";
import ImageViewer from "./components/ImageSource";
import Feather from '@expo/vector-icons/Feather';


const PlaceholderImage = require('./assets/images/background-image.png');

const Index = () => {
  const [facing, setFacing] = useState('back');
  const [selectedImage, setSelectedImage] = useState(null);


   const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
     setSelectedImage(result.assets[0].uri)
    } else {
     Alert.alert('Erro', 'Você não selecionou nenhuma imagem.');
    }
  };

  async function openCamera() {
    const options = {
      midiaType: 'photo',
      quality: 1,
    }

    const response = await launchCameraAsync(options)
    setSelectedImage(response.assets[0].uri)
  }


  return (
    <Container >
     <View>
     {selectedImage !== null && (
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      )}
     </View>
      <Buttons>
      <TO onPress={pickImageAsync} >
      <Feather name="image" size={24} color="black" />
       <TOText>Selecionar uma foto</TOText>
      </TO>
      <TO onPress={openCamera}>
        <TOText>Abrir camera</TOText>
      </TO>
      </Buttons>
      
    </Container> 
    
  )
}

export default Index