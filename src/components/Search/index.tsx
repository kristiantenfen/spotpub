import React, { useState } from 'react';
import PubList from '../PubList';
import SearchInput from '../SearchInput';

import { Container, ListTitle } from './styles';
interface SearchProps {
    onFocus?: () => {}
  }
const Search: React.FC<SearchProps> = ({...rest }) => {

    const [search, setSearch] = useState('');

    return (
        <Container>
            <SearchInput name='search' icon='search' placeholder="Encontre um restaurante" onChangeText={setSearch} {...rest} />
            <ListTitle>
          Restaurantes
      </ListTitle>
            <PubList search={search} />
        </Container>
    )
}

export default Search;