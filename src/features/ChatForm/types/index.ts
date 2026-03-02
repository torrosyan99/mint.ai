export type FileType = {
    type: 'file';
    status: 'error' | 'done';
    name: string;
};

export type ImageType = {
    type: 'image';
    status: 'waiting' | 'done';
    src?: string;
};
export type AllFile = FileType | ImageType;
