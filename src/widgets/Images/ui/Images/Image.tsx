import { type MouseEvent, useState } from 'react';

import { ImageLightbox } from '@/features/ImageLightbox';

import img from '@/shared/assets/images/lightbox-img.png';
import { P } from '@/shared/ui/P/P.tsx';

import DownloadSvg from '@icons/download.svg?react';
import TrashBinSvg from '@icons/trash-bin-5.svg?react';

import type { Image as ImageType } from './Images';
import cls from './Images.module.css';

export const Image = ({ src }: ImageType) => {
    const [isOpen, setIsOpen] = useState(false);

    const onDownloadClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    };
    const onDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={cls.imageWrapper} onClick={() => setIsOpen(true)}>
                <img className={cls.image} src={src} alt={'img'} />
                <div className={cls.info}>
                    <P className={cls.imageTitle} font={'medium'}>
                        ae69fb08e4987ry750afbsfergr5454654
                    </P>
                    <P size={'sm'}>image - 2.72 MB</P>
                </div>
                <div className={cls.instruments}>
                    <button className={cls.downloadButton} onClick={onDownloadClick}>
                        <DownloadSvg />
                        <P font={'medium'}>Скачать</P>
                    </button>
                    <button className={cls.deleteButton} onClick={onDeleteClick}>
                        <TrashBinSvg />
                    </button>
                </div>
            </div>
            <ImageLightbox isOpen={isOpen} setIsOpen={setIsOpen} url={img} />
        </>
    );
};
