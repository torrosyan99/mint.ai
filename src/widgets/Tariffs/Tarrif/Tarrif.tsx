import clsx from 'clsx';
import type { ReactNode } from 'react';

import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ImageAlbumSvg from '@icons/album.svg?react';
import AtomSvg from '@icons/atom-2.svg?react';
import PresentationSvg from '@icons/presentation.svg?react';
import TokensSvg from '@icons/token-2.svg?react';
import VerifiedCheckSvg from '@icons/verified-check.svg?react';
import VideoLibrarySvg from '@icons/video-library.svg?react';

import cls from './Tarrif.module.css';

interface TarrifProps {
    title: 'Free' | 'Pro' | 'Ultima';
    price: ReactNode;
    text: string;
    button: ReactNode;
    tokens: {
        text: string;
        count: number;
    };
}

export const Tarrif = ({ title, price, text, button, tokens }: TarrifProps) => {
    return (
        <div
            className={clsx(cls.tarrif, {
                [cls.ultima]: title === 'Ultima',
            })}
        >
            <Title h={'h4'}>{title}</Title>
            {title === 'Ultima' && (
                <div className={cls.popular}>Популярный</div>
            )}
            <P className={cls.price} font={'semibold'}>
                {price}
            </P>
            <P
                className={cls.text}
                font={'medium'}
                color={'secondary'}
                size={'lg'}
            >
                {text}
            </P>
            {button}
            <div className={cls.tokens}>
                <TokensSvg className={cls.svg} width={24} height={24} />
                <P font={'semibold'} size={'lg'}>
                    {tokens.count}
                </P>
                <P className={cls.tokensText}>{tokens.text}</P>
            </div>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <PresentationSvg />6 генераций презентаций
                </li>
                <li className={cls.item}>
                    <ImageAlbumSvg />
                    60 генераций изображений в нейросети (Nano Banana Pro,
                    Midjourney, Генератор изображений и др.)
                </li>
                <li className={cls.item}>
                    <VideoLibrarySvg />9 генераций видео: Kling, «Оживление
                    фото», «Генератор видео»
                </li>
                <li className={cls.item}>
                    <AtomSvg />
                    Доступ к популярным нейросетям: ChatGPT, Gemini, Claude и т.
                    д.
                </li>
                <li className={cls.item}>
                    <VerifiedCheckSvg />
                    Безлимитный доступ к DeepSeek V3.1, Gemini 2.5 Pro, ChatGPT
                    5-mini
                </li>
            </ul>
        </div>
    );
};
