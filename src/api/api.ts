import { createDirectus, rest, readFiles, readItems, readAssetRaw, Identity } from '@directus/sdk';
import { Schema } from './schema/schema';

const client = createDirectus<Schema>('http://localhost:8055').with(rest());

export const loadImages = async () =>
  await client.request(
    readFiles({
      filter: {
        type: {
          _contains: 'image',
        },
      },
    })
  );

export const loadAlbums = async () => await client.request(readItems('albums'));

export const loadImage = async (fileId: string, key: string = 'full-image'): Promise<string> => {
  const stream = await client.request(readAssetRaw(fileId, { key }));
  const blob = await new Response(stream).blob();
  const url = URL.createObjectURL(blob);

  return url;
};

export type ImageItem = Identity<Awaited<ReturnType<typeof loadImages>>[0]>;

export type AlbumItem = Identity<Awaited<ReturnType<typeof loadAlbums>>[0]>;
