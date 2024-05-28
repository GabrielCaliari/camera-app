import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: black;
 justify-content: space-between;
`;

export const Buttons = styled.View`
    width: 320px;
    height: 68px;
    margin-inline: 20px;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    margin-bottom: 48px;
`;

export const TO = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  flex-direction: row;

`;

export const TOText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
`;



export const ImagePhoto = styled.Image`
    width: 320px;
    height: 400px;
    border-radius: 18px;
    object-fit: cover;
    margin-top: 20px;
`;