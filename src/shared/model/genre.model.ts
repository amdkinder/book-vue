export interface IGenre {
  id?: number;
  name?: string | null;
}

export class Genre implements IGenre {
  constructor(public id?: number, public name?: string | null) {
  }
}

export function getGenreIdentifier(genre: IGenre): number | undefined {
  return genre.id;
}
