import { directusApi } from '@/api/api';
import { ImageItem } from '@/api/types/types';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Image, Modal } from 'react-bootstrap';

interface ImagePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  image: ImageItem | null;
}

export const ImagePreview = observer(
  ({ isOpen, image, onClose }: PropsWithChildren<ImagePreviewProps>) => {
    const [imageURL, setImageURL] = useState('');
    useEffect(() => {
      if (image !== null) {
        directusApi.loadImage(image.id, 'full-image').then((res) => setImageURL(res));
      }
    }, [image]);

    return (
      <Modal centered backdrop fullscreen='md-down' onHide={onClose} size='lg' show={isOpen}>
        <Modal.Header closeButton>{image?.title?.replace(/\.\w+/, '') ?? ''}</Modal.Header>
        <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={imageURL} alt={image?.title ?? ''} fluid style={{ objectFit: 'contain' }} />
        </Modal.Body>
      </Modal>
    );
  }
);
