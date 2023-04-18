export interface ILibraryContent {
  id?: number;
  title?: string | null;
  address?: string | null;
  description?: string | null;
}

export class LibraryContent implements ILibraryContent {
  constructor(public id?: number, public title?: string | null, public address?: string | null, public description?: string | null) {}
}

export function getLibraryContentIdentifier(libraryContent: ILibraryContent): number | undefined {
  return libraryContent.id;
}
