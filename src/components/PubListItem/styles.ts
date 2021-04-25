import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';


import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    height:160px;
    width:47%;
    margin-bottom: 20px;
`;

export const Item = styled(ImageBackground)`
  flex:1;
  border-radius:8px;
  overflow:hidden;
`;

export const ItemText = styled.Text`
    color:#FFF;
    position:absolute;
    bottom:10px;
    left: 5px;
    font-family: 'Poppins-Medium'
`;    

