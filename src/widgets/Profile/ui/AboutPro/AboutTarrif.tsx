import { Button } from '@/shared/ui/Button/Button.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ProAlbumSvg from '@icons/pro-album.svg?react';
import ProDesktopSvg from '@icons/pro-desktop.svg?react';
import ProVideoSvg from '@icons/pro-video-libary.svg?react';
import ProAtomSvg from '@icons/pro-atom.svg?react';
import ProCheckSvg from '@icons/pro-check.svg?react';
import TokenSvg from '@icons/token-2.svg?react';

import cls from './About.module.css';

export const AboutTarrif = () => {
    return (
        <div className={cls.box}>
            <div className={cls.top}>
                <div className={cls.left}>
                    <Title h={'h5'}>Pro</Title>
                    <div className={cls.line} />
                    <div className={cls.count}>
                        <TokenSvg />
                        400
                    </div>
                    <div className={cls.line} />
                    <Title className={cls.price} h={'h5'}>
                        199 <span> ₽/ед</span>
                    </Title>
                </div>
                <Button
                    className={cls.button}
                    radius={'lg'}
                    padding={'md'}
                    hSize={'sm'}
                    fontSize={'xs'}
                >
                    Активировать
                </Button>
            </div>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <ProDesktopSvg />6 генераций презентаций
                </li>
                <li className={cls.item}>
                    <ProAlbumSvg />
                    60 генераций изображений в нейросети (Nano Banana Pro,
                    Midjourney, Генератор изображений и др.)
                </li>
                <li className={cls.item}>
                    <ProVideoSvg />
                    9 генераций видео: Kling, «Оживление фото», «Генератор видео»
                </li>
                <li className={cls.item}>
                    <ProAtomSvg />
                    Доступ к популярным нейросетям: ChatGPT, Gemini, Claude и т. д.
                </li>
                <li className={cls.item}>
                    <ProCheckSvg />
                    Безлимитный доступ к DeepSeek V3.1, Gemini 2.5 Pro, ChatGPT 5-mini
                </li>
            </ul>
        </div>
    );
};
