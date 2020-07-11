import React, { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            <header>
         
            </header>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={12}
                width={30}
                handleDiameter={20}
                offColor={colors.background}
                onColor={colors.background}
                offHandleColor={colors.input}
                onHandleColor={colors.input}
            />
        </Container>
    );
};

export default Header;