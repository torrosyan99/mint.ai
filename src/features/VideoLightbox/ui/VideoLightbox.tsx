import video from '@/shared/assets/images/video.png';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Lightbox } from '@/shared/ui/Lightbox/Lightbox.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import DownloadSvg from '@icons/download-2.svg?react';
import MessagesSvg from '@icons/messages-3.svg?react';
import TrashBinSvg from '@icons/trash-bin-3.svg?react';
import VideoSvg from '@icons/video-4.svg?react';

import cls from './VideoLightbox.module.css';

interface VideoLightboxProps {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    url: string;
}

export const VideoLightbox = ({ isOpen, setIsOpen }: VideoLightboxProps) => {
    const onClose = () => setIsOpen(false);
    return (
        <Lightbox isOpen={isOpen} onClose={onClose}>
            <div className={cls.top}>
                <VideoSvg />
                <div>
                    <P color={'var(--color-10)'} font={'semibold'}>
                        ae69fb08e4987ry75.png
                    </P>
                    <P size={'sm'} color={'#646567'}>
                        video - 24.75 MB
                    </P>
                </div>
                <div className={cls.buttons}>
                    <ButtonIcon size={'lgCompact'} bg={'var(--color-6)'}>
                        <MessagesSvg />
                    </ButtonIcon>
                    <ButtonIcon size={'lgCompact'} bg={'var(--color-6)'}>
                        <DownloadSvg />
                    </ButtonIcon>
                    <ButtonIcon size={'lgCompact'} bg={'var(--color-6)'}>
                        <TrashBinSvg />
                    </ButtonIcon>
                </div>
            </div>
            <img className={cls.video} src={video} alt="video" />
        </Lightbox>
    );
};
