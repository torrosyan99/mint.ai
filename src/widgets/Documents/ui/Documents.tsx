import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import DocumentSvg from '@icons/document-2.svg?react';

import { Document } from './Document.tsx';
import cls from './Documents.module.css';

export interface Document {
    title: string;
}

interface DocumentsProps {
    documents: Document[];
}

export const Documents = ({ documents }: DocumentsProps) => {
    return (
        <Block>
            {documents.length > 0 ? (
                <div className={cls.documents}>
                    {documents.map((document, i) => (
                        <Document {...document} key={i} />
                    ))}
                </div>
            ) : (
                <EmptyBlock
                    title={'Пока ничего нет'}
                    text={
                        'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
                    }
                    icon={<DocumentSvg />}
                />
            )}
        </Block>
    );
};
