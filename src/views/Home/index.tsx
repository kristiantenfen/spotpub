import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Body, Container, Description, Header, Title } from './styles'

import bgImage from '../../assets/header.png';
import Search from '../../components/Search';

const Home: React.FC = () => {
    const navigation = useNavigation();
     return (
        <Container>
             
             <Header source={bgImage}>
                 <Title>Descubra novos sabores</Title>
                 <Description>Aqui eu converso com você sobre nossa proposta</Description>
             </Header>
             <Body>
                 <Search onFocus={() => navigation.push('PubSearch')}/>
             </Body>
        </Container>
    )
 }

 export default Home
