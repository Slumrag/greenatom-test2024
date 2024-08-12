import { useContext } from 'react';
import { MainStoreContext } from './MainStoreProvider';

export const useMainStore = () => {
  const mainStore = useContext(MainStoreContext);
  return mainStore;
};

export const useAlbumStore = () => {
  const store = useMainStore();
  return store?.albums[0];
};
