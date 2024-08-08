import './App.css';
import { loadAlbums, loadImages } from './api/api';

function App() {
  return (
    <div className=''>
      <button
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
      </button>
    </div>
  );
}

export default App;
