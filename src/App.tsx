import './App.css';
import { ImageGallery } from './components/ImageGallery/ImageGallery';

function App() {
  return (
    <div className=''>
      {/* <button
        onClick={() => {
          loadImages().then((res) => console.log('images', res));
        }}
      >
        load images
      </button>
      <button
        onClick={() => {
          loadAlbums().then((res) => console.log(res));
        }}
      >
        load albums
      </button> */}
      <ImageGallery></ImageGallery>
    </div>
  );
}

export default App;
