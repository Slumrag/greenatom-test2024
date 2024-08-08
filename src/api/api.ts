import { createDirectus, rest, readFiles, readItems } from '@directus/sdk';

const client = createDirectus('http://localhost:8055').with(rest());
// .with(authentication('cookie', { credentials: 'include' }));
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
