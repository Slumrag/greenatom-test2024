import { directusApi } from '@/api/api';
import { FolderItem, ImageItem } from '@/api/types/types';
import { makeAutoObservable, runInAction } from 'mobx';

export class AlbumStore {
  images: ImageItem[] = [];
  id: string;
  name: string;
  thumbnail?: string;

  constructor({ id, name }: FolderItem) {
    this.id = id;
    this.name = name;
    makeAutoObservable(this);
  }

  public get imageCount(): number {
    return this.images.length;
  }

  /**
   * getImageById
   */
  public getImageById(id: string) {
    return this.images.find((img) => img.id === id);
  }

  async loadImages(): Promise<void> {
    const images = await directusApi.loadImages(this.name);
    runInAction(() => {
      this.images = images;
    });
  }

  async loadThumbnail(): Promise<void> {
    const id = this.images[0].id;
    const imageUrl = await directusApi.loadImage(id, 'thumbnail');
    this.thumbnail = imageUrl;
  }

  clear() {
    this.id = '';
    this.name = '';
    this.images = [];
  }
}
