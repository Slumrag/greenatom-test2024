import { useEffect, useState } from 'react';
import { ImageCard } from './ImageCard/ImageCard';
import { observer } from 'mobx-react-lite';
import { useMainStore } from '@/store/MainStore/useMainStore';
import { AlbumStore } from '@/store/MainStore/objects/AlbumStore';

export const ImageGallery = observer(() => {
  const store = useMainStore();
  // let album;
  const [album, setAlbum] = useState<AlbumStore>();
  useEffect(() => {
    store
      ?.loadAlbums()
      // .then(() => console.log(store.albums))
      .then(() => store.albums[0].loadImages())
      .then(() => setAlbum(store.albums[0]));

    return () => {
      store?.clear();
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0,250px))',
        gridTemplateRows: '1fr',
        gridAutoFlow: 'row',

        gap: '10px',
      }}
    >
      {album?.images.map((img) => (
        <ImageCard key={img.id} image={img}></ImageCard>
      ))}
    </div>
  );
});
