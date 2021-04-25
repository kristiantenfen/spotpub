import styled from "styled-components/native";
import { FlatList as FlatListRN } from 'react-native';

export const Container = styled.View`
    margin-top:20px;
    flex:1;
`;

export const FlatList = styled(FlatListRN)`
`;

export const EmptyList = styled.Text`
text-align:center;
`;

