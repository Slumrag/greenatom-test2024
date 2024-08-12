import {
  createDirectus,
  rest,
  readFiles,
  readItems,
  readAssetRaw,
  readFolders,
} from '@directus/sdk';
import { Schema } from './schema/schema';

class DirectusApi {
  client;
  static instance: DirectusApi;
  constructor() {
    this.client = createDirectus<Schema>('http://localhost:8055').with(rest());

    if (DirectusApi.instance !== undefined) {
      return DirectusApi.instance;
    }

    DirectusApi.instance = this;
  }

  loadChildFolders = async (parent: string) =>
    await this.client.request(readFolders({ filter: { parent: { name: { _eq: parent } } } }));

  loadImages = async (folder: string) =>
    await this.client.request(
      readFiles({
        filter: {
          type: {
            _contains: 'image',
          },
          folder: {
            name: { _eq: folder },
          },
        },
      })
    );

  loadAlbums = async () =>
    await this.client.request(
      readItems('albums', { fields: ['*', { images: ['directus_files_id'] }] })
    );

  loadImage = async (
    fileId: string,
    key: 'full-image' | 'thumbnail' = 'full-image'
  ): Promise<string> => {
    const stream = await this.client.request(readAssetRaw(fileId, { key }));
    const blob = await new Response(stream).blob();
    const url = URL.createObjectURL(blob);

    return url;
  };
}

export const directusApi = new DirectusApi();
