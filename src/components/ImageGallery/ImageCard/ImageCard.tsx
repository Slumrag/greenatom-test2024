import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { directusApi } from '@/api/api';
import { ImageItem } from '@/api/types/types';

interface ImageCardProps {
  image: ImageItem;
}

export const ImageCard = observer(({ image }: ImageCardProps) => {
  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    directusApi.loadImage(image.id, 'thumbnail').then((res) => setImageURL(res));
  }, [image]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '250px 1fr',
        gridTemplateColumns: '1fr',
        background: 'grey',
      }}
    >
      <div style={{ display: 'flex' }}>
        <img
          src={imageURL}
          alt={image.title?.replace(/\.\w+/, '') ?? ''}
          style={{
            display: 'flex',
            objectFit: 'contain',
            width: '100%',
          }}
        />
      </div>

      <p>{image.title?.replace(/\.\w+/, '') ?? ''}</p>
    </div>
  );
});
