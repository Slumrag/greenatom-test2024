import { useEffect, useState } from 'react';
import { loadImage } from '../../../api/api';

interface ImageCardProps {
  id: string;
  title: string;
}

export const ImageCard = ({ id, title }: ImageCardProps) => {
  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    loadImage(id, 'thumbnail').then((res) => setImageURL(res));
  }, [id]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '250px 1fr',
        gridTemplateColumns: '1fr',
        background: 'grey',
      }}
    >
      <img
        src={imageURL}
        alt={title}
        style={{
          display: 'flex',
          objectFit: 'contain',
          width: '100%',
        }}
      />
      <p>{title}</p>
    </div>
  );
};
