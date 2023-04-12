export interface IBook {
    id?: number;
    title?: string;
    description?: string;
    author?: string;
    publishedYear?: number;
    page?: number;
    imageUrl?: string;
    hasPdf?: boolean;
    hasVide?: boolean;
    hasAudio?: boolean;
    hasOffline?: boolean;
    offlineQuantity?: boolean;
    pdfUrl?: string;
    videoUrl?: string;
    audioUrl?: string;
    categories?: string;
    genres?: string;
    createDate?: Date;
    createdBy?: string;
    stars?: number;
    reads?: number;
    uploads?: number;
    library?: string;
}
