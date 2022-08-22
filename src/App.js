
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Card from './components/Card';
import GlobalStyle from './components/styles/Global';
import { themeLight } from './components/styles/theme';
import Footer from './components/Footer';
import content from './content';


function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <>
        <GlobalStyle />
          <Header />
          <Container className="container">
            {content.map(card => {
              return (
                <Card key={card.id} item={card} />
              )
            })}
          </Container>
          <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
