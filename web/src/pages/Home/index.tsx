import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Container, Content, Main } from './styles';

import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logoDark.svg';

const Home = () => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <Content>
        <div id="Home"/>
        <header>
          {title === 'light' ? (<img src={logo} alt="Ecoleta" />)
            : (<img src={logoDark} alt="Ecoleta" />)}
          <Link to="/create-point" />
        </header>

        <Main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </Main>
      </Content>
    </Container>
  );
};

//export
export default Home;