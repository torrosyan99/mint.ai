import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import ChatGptSvg from '@icons/chatgpt.svg?react';
import ClaudeSvg from '@icons/claude.svg?react';
import GalleryRoundSvg from '@icons/gallery-round.svg?react';
import GeminiSvg from '@icons/gemini-2.svg?react';
import GrokSvg from '@icons/grok.svg?react';
import LogoSvg from '@icons/logo.svg?react';

import cls from './Gpt.module.css';

const buttonProps = {
    variant: 'ghost',
    padding: 'none',
    hSize: 'none',
    font: 'regular',
    fontSize: 'xs',
    className: cls.item,
} as const;

const boxProps = {
    className: cls.box,
    radius: 'md',
    border: 'var(--primary-border-color)',
    bg: 'var(--color-9)',
    shadow: true,
    padding: 'none',
} as const;

export const List = () => {
    return (
        <div className={cls.listWrapper}>
            <div className={cls.list}>
                <Button {...buttonProps}>
                    <Box {...boxProps}>
                        <ChatGptSvg />
                    </Box>
                    ChatGPT 5.2
                </Button>
                <Button {...buttonProps}>
                    <Box {...boxProps}>
                        <GeminiSvg />
                    </Box>
                    Gemini 3 Pro
                </Button>
                <Button {...buttonProps}>
                    <Box {...boxProps}>
                        <GrokSvg />
                    </Box>
                    Grok-4
                </Button>
                <Button {...buttonProps}>
                    <Box {...boxProps} border={'var(--primary-border-color)'}>
                        <ClaudeSvg />
                    </Box>
                    Claude
                </Button>
                <Button {...buttonProps}>
                    <Box {...boxProps}>
                        <GalleryRoundSvg />
                    </Box>
                    Генератор изображений
                </Button>
                <Button {...buttonProps}>
                    <Box {...boxProps}>
                        <LogoSvg />
                    </Box>
                    Все нейросети{' '}
                </Button>
            </div>
        </div>
    );
};
