import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Container, Item, ItemText } from './styles';

interface ItemProps {
    name: string,
    image: string,
    id: string
}

const PubListItem: React.FC<{ pub: ItemProps }> = ({ pub }) => {
    const navigation = useNavigation();
    return (
        <Container onPress={() => navigation.push('PubView', {id: pub.id})}>
            <Item source={{ uri: pub.image }}>
                <ItemText>{pub.name}</ItemText>
            </Item>
        </Container>
    )
}

export default PubListItem;