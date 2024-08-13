import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { directusApi } from '@/api/api';
import { ImageItem } from '@/api/types/types';
import { Card } from 'react-bootstrap';

interface ImageCardProps {
  image: ImageItem;
  onClick: () => void;
}

export const ImageCard = observer(({ image, onClick }: ImageCardProps) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    directusApi.loadImage(image.id, 'thumbnail').then((res) => setImageURL(res));
  }, [image]);

  return (
    <Card onClick={onClick}>
      <Card.Img
        src={imageURL}
        title={image.title?.replace(/\.\w+/, '') ?? ''}
        style={{ display: 'flex', maxWidth: '100%', minHeight: '100%', objectFit: 'cover' }}
      ></Card.Img>
    </Card>
  );
});
