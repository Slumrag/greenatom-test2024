import { observer } from 'mobx-react-lite';
import './App.css';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { MainStoreProvider } from './store/MainStore/MainStoreProvider';

const App = observer(() => {
  return (
    <MainStoreProvider>
      <ImageGallery></ImageGallery>
    </MainStoreProvider>
  );
});

export default App;
