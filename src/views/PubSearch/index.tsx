import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Feather';
import Search from '../../components/Search';

import { Container, SafeArea, Header, GoBack, Title, Strong } from './styles';

const PubSearch: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeArea>
      <Container>
        <Header>
          <GoBack onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color="#333333" />
          </GoBack>
          <Title>
            Resultado para {`\n`}
            <Strong>Termo pesquisado</Strong>
          </Title>
        </Header>
        <Search />
      </Container>
    </SafeArea>
  );
}

export default PubSearch;