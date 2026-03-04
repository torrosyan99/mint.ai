import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ProAlbumSvg from '@icons/pro-album.svg?react';
import ProAtomSvg from '@icons/pro-atom.svg?react';
import ProCheckSvg from '@icons/pro-check.svg?react';
import ProDesktopSvg from '@icons/pro-desktop.svg?react';
import ProVideoLibrary from '@icons/pro-video-libary.svg?react';
import TokenSvg from '@icons/token-2.svg?react';

import { Box } from '../Box/Box.tsx';
import cls from './ModalPro.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalPro = ({ isOpen, onClose }: ModalProps) => {
    return (
        <Modal className={cls.modal} isOpen={isOpen} onClose={onClose}>
            <Title className={cls.title} h={'h5'}>
                Подробнее о подписке
            </Title>
            <Box className={cls.box}>
                <div className={cls.tablet}>Активная до 15.02.2026</div>
                <div className={cls.flex}>
                    <Title h={'h5'}>Pro</Title>
                    <div className={cls.line} />
                    <div className={cls.count}>
                        <TokenSvg />
                        400
                    </div>
                    <div className={cls.line} />
                    <Title h={'h5'}>199 ₽/ед</Title>
                </div>
            </Box>
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
                    <ProVideoLibrary />9 генераций видео: Kling, «Оживление
                    фото», «Генератор видео»
                </li>
                <li className={cls.item}>
                    <ProAtomSvg />
                    Доступ к популярным нейросетям: ChatGPT, Gemini, Claude и т.
                    д.
                </li>
                <li className={cls.item}>
                    <ProCheckSvg />
                    Безлимитный доступ к DeepSeek V3.1, Gemini 2.5 Pro, ChatGPT
                    5-mini
                </li>
            </ul>
            <div className={cls.buttons}>
                <Button
                    variant={'none'}
                    hSize={'xl'}
                    radius={'lg'}
                    padding={'lg'}
                    className={cls.button}
                    center
                >
                    Изменить способ оплаты
                </Button>
                <Button
                    className={cls.cancelButton}
                    variant={'primary'}
                    hSize={'xl'}
                    radius={'lg'}
                    padding={'lg'}
                    onClick={onClose}
                    center
                >
                    Отменить подписку
                </Button>
            </div>
        </Modal>
    );
};
