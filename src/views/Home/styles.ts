import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
 flex:1;
`;
export const Header = styled(ImageBackground)`
  height:313px;
  padding:40px 33px;
`;

export const Title = styled.Text`
    font-size:24px;
    font-family: 'Poppins-Medium';
    width:260px;
`;
export const Description = styled.Text`
    margin-top:20px;
    font-size:18px;
    font-family: 'Poppins-Regular';
`;

export const Body = styled.View`
    border-top-left-radius:32px;
    border-top-right-radius:32px;
    margin-top:-50px;
    background-color:#FFF;
    flex:1;
    padding:30px;
`;
