import styled from "styled-components/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    width:100%;
    height:50px;
    border:1px solid #E6E6E6;
    border-radius:8px;

    flex-direction:row;
    align-items:center;
`;

export const TextInput = styled.TextInput`
    width:100%;
    height:50px;
    color: #666666;
    flex:1;
    font-size:14px;
    font-family: 'Poppins-Regular';
`;

export const Icon = styled(FeatherIcon)`
margin:10px;
`;