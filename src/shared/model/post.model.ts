import type {ILibrary} from "@/shared/model/library.model";
import type {PostType} from "@/shared/model/post-type.model";

export interface IPost {
    id?: number;
    title?: string | null;
    subTitle?: string | null;
    context?: string | null;
    createdDate?: string | null;
    icon?: string | null;
    color?: string | null;
    imageUrl?: string | null;
    imageContentType?: string | null;
    type?: PostType | null;
    library?: ILibrary | null;
}

export class Post implements IPost {
    constructor(
        public id?: number,
        public title?: string | null,
        public subTitle?: string | null,
        public context?: string | null,
        public createdDate?: string | null,
        public icon?: string | null,
        public color?: string | null,
        public imageUrl?: string | null,
        public imageContentType?: string | null,
        public type?: PostType | null,
        public library?: ILibrary | null
    ) {
    }
}

export function getPostIdentifier(post: IPost): number | undefined {
    return post.id;
}
