export interface Schema {
  albums: Album[];
  album_files: AlbumFiles[];
}

export interface Album {
  id: number;
  name: string;
  date_created: 'datetime';
  images: number[] | AlbumFiles[];
  // m2m: number[] | AlbumFiles[];
}

export interface AlbumFiles {
  id: number;
  albums_id: number | Album;
  directus_files_id: string;
}
