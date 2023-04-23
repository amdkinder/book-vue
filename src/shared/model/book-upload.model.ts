import type {IBook} from "@/shared/model/book.model";

export interface IBookUpload {
    id?: number;
    username?: string | null;
    date?: Date | null;
    book?: IBook | null;
}

export class BookUpload implements IBookUpload {
    constructor(public id?: number, public username?: string | null, public date?: Date | null, public book?: IBook | null) {
    }
}

export function getBookUploadIdentifier(bookUpload: IBookUpload): number | undefined {
    return bookUpload.id;
}
