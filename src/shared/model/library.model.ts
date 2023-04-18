import type {ILibraryContent} from "@/shared/model/library-content.model";

export interface ILibrary {
  id?: number;
  name?: string | null;
  shortName?: string | null;
  password?: string | null;
  url?: string | null;
  bannerUrl?: string | null;
  bannerContentType?: string | null;
  logoUrl?: string | null;
  content?: ILibraryContent | null;
}

export class Library implements ILibrary {
  constructor(
    public id?: number,
    public name?: string | null,
    public shortName?: string | null,
    public password?: string | null,
    public url?: string | null,
    public bannerUrl?: string | null,
    public bannerContentType?: string | null,
    public logoUrl?: string | null,
    public content?: ILibraryContent | null
  ) {}
}

export function getLibraryIdentifier(library: ILibrary): number | undefined {
  return library.id;
}
