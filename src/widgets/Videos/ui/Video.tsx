import { type MouseEvent, useState } from 'react';

import { VideoLightbox } from '@/features/VideoLightbox';

import { P } from '@/shared/ui/P/P.tsx';

import DownloadSvg from '@icons/download.svg?react';
import TrashBinSvg from '@icons/trash-bin-5.svg?react';
import PlaySvg from '@icons/play.svg?react';

import cls from './Videos.module.css';
import type { Video as VideoType } from './Videos.tsx';

export const Video = ({ src }: VideoType) => {
    const [isOpen, setIsOpen] = useState(false);

    const onDownloadClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    };
    const onDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={cls.videoWrapper} onClick={() => setIsOpen(true)}>
                <img className={cls.video} src={src} alt={'video'} />
                <PlaySvg className={cls.play}/>
                <div className={cls.info}>
                    <P className={cls.videoTitle} font={'medium'}>
                        ae69fb08e4987ry750afbsfergr5454654
                    </P>
                    <P size={'sm'}>.MP4 - 14.89 MB</P>
                </div>
                <div className={cls.instruments}>
                    <button
                        className={cls.downloadButton}
                        onClick={onDownloadClick}
                    >
                        <DownloadSvg />
                        <P font={'medium'}>Скачать</P>
                    </button>
                    <button
                        className={cls.deleteButton}
                        onClick={onDeleteClick}
                    >
                        <TrashBinSvg />
                    </button>
                </div>
            </div>
            <VideoLightbox isOpen={isOpen} setIsOpen={setIsOpen} url={src} />
        </>
    );
};
