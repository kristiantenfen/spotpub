import styled from "styled-components/native";
import { ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
export const Container = styled.View`
 flex:1;
`;


export const Header = styled(ImageBackground)`
  height:179px;
  padding:50px 30px;
`;
export const Logo = styled(ImageBackground)`
  height:120px;
  width:120px;
  border-radius:60px;
    overflow:hidden;
    margin-top:-120px;
    justify-content:center;

`;

export const Title = styled.Text`
    font-size:24px;
    font-family: 'Poppins-Medium';
    width:260px;
    text-align:center;
`;

export const Body = styled.View`
    border-top-left-radius:32px;
    border-top-right-radius:32px;
    margin-top:-30px;
    background-color:#FFF;
    flex:1;
    padding:30px;
`;

export const ContentLogo = styled.View`
    align-items:center;
`;

export const GoBack = styled(TouchableWithoutFeedback)`
width:20px;
height:20px;
`;

export const Description = styled.View`
    margin-top:30px;
`;
export const DescriptionTitle = styled.Text`
    font-family: 'Poppins-Medium';
    font-size:18px;
`;
export const DescriptionText = styled.Text`
    margin-top:8px;
    font-family: 'Poppins-Regular';
    color: #666666;
    font-size:16px;
`;

export const Divider = styled.View`
    margin-top:30px;
    border-bottom-color:#999999;
    border-bottom-width:1px;
`;