import React from 'react'
import { TextInputProps } from 'react-native';
import { TextInput, Container, Icon } from './styles';


interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

const SearchInput: React.FC<InputProps> = ({name, icon, ...rest}) => {
    return (
        <Container>
            <Icon name={icon} color="#ED1C24" size={20}/>
            <TextInput {...rest}/>
        </Container>
    )
}

export default SearchInput;
