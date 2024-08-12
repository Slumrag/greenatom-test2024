import { directusApi } from '@/api/api';
import { makeAutoObservable, runInAction } from 'mobx';
import { AlbumStore } from './objects/AlbumStore';

export class MainStore {
  albums: AlbumStore[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  public getAlbumById(id: string): AlbumStore | undefined {
    return this.albums.find((e) => e.id === id);
  }

  public getAlbumByName(name: string): AlbumStore | undefined {
    return this.albums.find((e) => e.name === name);
  }

  async loadAlbums() {
    const albums = await directusApi.loadChildFolders('albums');
    runInAction(() => {
      albums.forEach((e) => {
        this.albums.push(new AlbumStore(e));
      });
    });
  }

  async loadImage(id: string): Promise<string> {
    const imageUrl = await directusApi.loadImage(id);
    return imageUrl;
  }

  clear() {
    this.albums = [];
  }
}
export const mainStore = new MainStore();
