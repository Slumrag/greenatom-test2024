import { Identity } from '@directus/sdk';
import { directusApi } from '../api';

export type ImageItem = Identity<Awaited<ReturnType<typeof directusApi.loadImages>>[0]>;

export type AlbumItem = Identity<Awaited<ReturnType<typeof directusApi.loadAlbums>>[0]>;

export type FolderItem = Identity<Awaited<ReturnType<typeof directusApi.loadChildFolders>>[0]>;
