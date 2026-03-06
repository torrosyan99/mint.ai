import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Lightbox } from '@/shared/ui/Lightbox/Lightbox.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import DownloadSvg from '@icons/download-2.svg?react';
import GallerySvg from '@icons/gallery-2.svg?react';
import TrashBinSvg from '@icons/trash-bin-3.svg?react';

import cls from './ImageLightbox.module.css';

interface ImageLightboxProps {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    url: string;
}

export const ImageLightbox = ({
    isOpen,
    setIsOpen,
    url,
}: ImageLightboxProps) => {
    const onClose = () => setIsOpen(false);
    return (
        <Lightbox isOpen={isOpen} onClose={onClose}>
            <div className={cls.top}>
                <GallerySvg />
                <div>
                    <P color={'var(--color-10)'} font={'semibold'}>
                        ae69fb08e4987ry75.png
                    </P>
                    <P size={'sm'} color={'#646567'}>
                        image - 2.72 MB
                    </P>
                </div>
                <div className={cls.buttons}>
                    <ButtonIcon size={'lgCompact'} bg={'var(--color-6)'}>
                        <DownloadSvg />
                    </ButtonIcon>
                    <ButtonIcon size={'lgCompact'} bg={'var(--color-6)'}>
                        <TrashBinSvg />
                    </ButtonIcon>
                </div>
            </div>
            <img className={cls.image} src={url} alt="image" />
        </Lightbox>
    );
};
