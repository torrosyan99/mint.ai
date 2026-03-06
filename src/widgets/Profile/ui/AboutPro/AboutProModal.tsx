import { useState } from 'react';

import { Period } from '@/widgets/Profile/ui/TrafficTokens/Period.tsx';

import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ProAlbumSvg from '@icons/pro-album.svg?react';
import ProAtomSvg from '@icons/pro-atom.svg?react';
import ProCheckSvg from '@icons/pro-check.svg?react';
import ProDesktopSvg from '@icons/pro-desktop.svg?react';
import ProVideoSvg from '@icons/pro-video-libary.svg?react';
import TokenSvg from '@icons/token-2.svg?react';

import cls from './AboutProModal.module.css';

interface AboutProps {
    expired: boolean;
}

export const AboutProModal = (
    { expired }: AboutProps,
    marginTop: number = 24,
) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <>
            <Button
                className={cls.mainButton}
                bg={'var(--color-1)'}
                center
                padding={'md'}
                fontSize={'xs'}
                onClick={onOpen}
            >
                Подробнее о тарифе
            </Button>
            <Modal maxWidth={650} isOpen={isOpen} onClose={onClose}>
                <Title h={'h5'}>Подробнее о подписке</Title>
                <Box className={cls.box} bg={'var(--color-6)'}>
                    <Period expired={expired}>15.02.2026</Period>
                    <div className={cls.top}>
                        <Title h={'h4'}>Pro</Title>
                        <div className={cls.line} />
                        <div className={cls.count}>
                            <TokenSvg />
                            400
                        </div>
                        <div className={cls.line} />
                        <Title className={cls.price} h={'h4'}>
                            199 <span> ₽/ед</span>
                        </Title>
                    </div>
                </Box>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <ProDesktopSvg width={16} height={16} />6 генераций
                        презентаций
                    </li>
                    <li className={cls.item}>
                        <ProAlbumSvg width={16} height={16} />
                        60 генераций изображений в нейросети (Nano Banana Pro,
                        Midjourney, Генератор изображений и др.)
                    </li>
                    <li className={cls.item}>
                        <ProVideoSvg width={16} height={16} />9 генераций видео:
                        Kling, «Оживление фото», «Генератор видео»
                    </li>
                    <li className={cls.item}>
                        <ProAtomSvg width={16} height={16} />
                        Доступ к популярным нейросетям: ChatGPT, Gemini, Claude
                        и т. д.
                    </li>
                    <li className={cls.item}>
                        <ProCheckSvg width={16} height={16} />
                        Безлимитный доступ к DeepSeek V3.1, Gemini 2.5 Pro,
                        ChatGPT 5-mini
                    </li>
                </ul>

                <Buttons className={cls.buttons} marginTop={marginTop}>
                    <Button
                        className={cls.button}
                        hSize={'xl'}
                        padding={'lg'}
                        radius={'lg'}
                        center
                    >
                        Изменить способ оплаты
                    </Button>
                    <Button
                        variant={'primary'}
                        hSize={'xl'}
                        padding={'lg'}
                        radius={'lg'}
                        center
                    >
                        Отменить подписку
                    </Button>
                </Buttons>
            </Modal>
        </>
    );
};
