import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Feather';


import { Container,Header, Title, Body, Logo, ContentLogo, GoBack, Description, DescriptionTitle, DescriptionText, Divider } from './styles';
import { ScrollView } from 'react-native';


interface IPub {
    id: string,
    name: string,
    image: string,
    logo: string,
    description: string,
    opening_hours: string,
    payment_methods: string,
    price_range: string,
    telephone: string,
    website: string,
}
  
const PubItemView: React.FC<{pub: IPub}> = ({pub}) => {
    const navigation = useNavigation();
    return (
        <Container>
            <Header source={{ uri: pub.image }}>
      <GoBack onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color="#FFF" />
          </GoBack>
             </Header>
      <Body>
            <ContentLogo>
          <Logo source={{ uri: pub.logo }} />
          <Title>{ pub.name}</Title>
          </ContentLogo>
          <ScrollView>

        <Description>
          <DescriptionTitle>
            Descrição
          </DescriptionTitle>
          <DescriptionText>
            {pub.description}
          </DescriptionText>
        </Description>
        <Description>
          <DescriptionTitle>
            Contato
          </DescriptionTitle>
          <DescriptionText>
          {pub.telephone}
          </DescriptionText>
        </Description>
        <Description>
          <DescriptionTitle>
            Faixa de preço
          </DescriptionTitle>
          <DescriptionText>
          {pub.price_range}
          </DescriptionText>
        </Description>
        <Divider />
        <Description>
          <DescriptionTitle>
            Horários de funcionamento
          </DescriptionTitle>
          <DescriptionText>
          {pub.opening_hours}
          </DescriptionText>
        </Description>
        <Description>
          <DescriptionTitle>
            Formas de pagamento
          </DescriptionTitle>
          <DescriptionText>
          {pub.payment_methods}
          </DescriptionText>
        </Description>
        
          </ScrollView>
      </Body>
      </Container>
  );
}

export default PubItemView;