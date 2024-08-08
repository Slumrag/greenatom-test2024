import { useEffect, useState } from 'react';
import { ImageItem, loadImages } from '../../api/api';
import { ImageCard } from './ImageCard/ImageCard';

export function ImageGallery() {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    loadImages()
      .then((res) => setImages(res))
      .catch((err) => console.error(err));
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
      {images.map((img) => (
        <ImageCard key={img.id} id={img.id} title={img.title ?? ''}></ImageCard>
      ))}
    </div>
  );
}
