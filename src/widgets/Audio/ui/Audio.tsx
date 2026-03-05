import { Box } from '@/shared/ui/Box/Box.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import DownloadSvg from '@icons/download-3.svg?react';
import PenSvg from '@icons/pen-3.svg?react';
import PlaySvg from '@icons/play-2.svg?react';
import TrashBinSvg from '@icons/trash-bin-4.svg?react';

import cls from './Audio.module.css';
import type { Audio as AudioType } from './AudioSection.tsx';

export const Audio = ({ title }: AudioType) => {
    return (
        <Box
            bg={'var(--color-23)'}
            className={cls.box}
            padding={'lg'}
            radius={'sm'}
        >
            <Box className={cls.play} bg={'var(--color-24)'} padding={'none'}>
                <PlaySvg />
            </Box>
            <div className={cls.info}>
                <div className={cls.title}>
                    <P font={'medium'}>{title}</P>
                    <button className={cls.button}>
                        <PenSvg />
                    </button>
                </div>
                <P size={'sm'} color={'var(--color-7)'}>
                    .MP3 - 4.39 MB
                </P>
            </div>
            <div className={cls.instruments}>
                <button className={cls.button}>
                    <TrashBinSvg />
                </button>
                <button className={cls.button}>
                    <DownloadSvg />
                </button>
            </div>
        </Box>
    );
};
