import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
flex:1;
`;

export const Container = styled.View`
flex:1;
padding:10px 30px;
`;

export const Header = styled.View`
display:flex;
flex-direction:row;
`;
export const GoBack = styled(TouchableWithoutFeedback)`
width:20px;
height:20px;
`;
export const Title = styled.Text`
font-size:16px;
font-family: 'Poppins-Regular';
color:#666666;
height:80px;
width:90%;
text-align:center;
`;
export const Strong = styled.Text`
color:#333333;
font-size:24px;
font-family: 'Poppins-Medium';
`;
