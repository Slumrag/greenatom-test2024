export interface Schema {
  albums: Album[];
}

export interface Album {
  id: number;
  name: string;
  date_created: 'datetime';
}
