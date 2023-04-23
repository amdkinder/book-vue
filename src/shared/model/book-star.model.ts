export interface IBookStar {
  id?: number;
  login?: string | null;
  bookId?: number | null;
  star?: number | null;
}

export class BookStar implements IBookStar {
  constructor(public id?: number, public login?: string | null, public bookId?: number | null, public star?: number | null) {
  }
}

export function getBookStarIdentifier(bookStar: IBookStar): number | undefined {
  return bookStar.id;
}
