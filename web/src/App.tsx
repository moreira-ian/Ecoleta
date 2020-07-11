import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import Routes from './routes';
import Header from './components/Header';
import Globalstyles from './styles/global';
import usePersistedState from './utils/usePersistedState'
//theme
import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Globalstyles/>
      <Header toggleTheme={toggleTheme}/>
      <Routes/> 
      </ThemeProvider>
    </div>
  );
}

//export
export default App;
