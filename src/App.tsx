import { observer } from 'mobx-react-lite';
import './App.css';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { MainStoreProvider } from './store/MainStore/MainStoreProvider';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';

const App = observer(() => {
  return (
    <>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link href='http://localhost:8055'>Панель Администратора</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={4}>
        <MainStoreProvider>
          <ImageGallery></ImageGallery>
        </MainStoreProvider>
      </Stack>
    </>
  );
});

export default App;
