import { useEffect, useState } from 'react';
import { ImageCard } from './ImageCard/ImageCard';
import { observer } from 'mobx-react-lite';
import { useMainStore } from '@/store/MainStore/useMainStore';
import { AlbumStore } from '@/store/MainStore/objects/AlbumStore';
import { ImagePreview } from './ImagePreview/ImagePreview';
import { ImageItem } from '@/api/types/types';
import styles from './ImageGallery.module.css';

export const ImageGallery = observer(() => {
  const store = useMainStore();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [album, setAlbum] = useState<AlbumStore>();

  useEffect(() => {
    store
      ?.loadAlbums()
      .then(() => store.albums[0].loadImages())
      .then(() => setAlbum(store.albums[0]));

    return () => {
      store?.clear();
    };
  }, []);

  const handleOpen = (image: ImageItem) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.ImageGalleryGrid}>
        {album?.images.map((img) => (
          <ImageCard key={img.id} image={img} onClick={() => handleOpen(img)}></ImageCard>
        ))}
      </div>
      <ImagePreview isOpen={open} image={selectedImage} onClose={handleClose}></ImagePreview>
    </>
  );
});
