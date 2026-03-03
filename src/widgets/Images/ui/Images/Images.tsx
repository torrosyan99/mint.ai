import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import GallerySvg from '@icons/gallery.svg?react';

import { Image } from './Image';
import cls from './Images.module.css';

export interface Image {
    src: string;
}

interface ImagesProps {
    images: Image[];
}

export const Images = ({ images }: ImagesProps) => {
    return (
        <Block>
            {images.length > 0 ? (
                <div className={cls.images}>
                    {images.map((image) => (
                        <Image {...image} />
                    ))}
                </div>
            ) : (
                <EmptyBlock
                    title={'Пока ничего нет'}
                    text={
                        'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
                    }
                    icon={<GallerySvg />}
                />
            )}
        </Block>
    );
};
