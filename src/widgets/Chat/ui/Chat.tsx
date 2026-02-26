import { ChatForm } from '@/features/ChatForm';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Container } from '@/shared/ui/Container/Container.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ChatGptSvg from '@icons/chatgpt.svg?react';
import ClaudeSvg from '@icons/claude.svg?react';
import GalleryRoundSvg from '@icons/gallery-round.svg?react';
import GeminiSvg from '@icons/gemini-2.svg?react';
import GrokSvg from '@icons/grok.svg?react';
import LogoSvg from '@icons/logo.svg?react';

import cls from './Chat.module.css';

export const Chat = () => {
    return (
        <Container className={cls.chat}>
            <div className={cls.chatTop}>
                <Title h={'h3'}>
                    Простой старт в мир{' '}
                    <span className={cls.titleSpan}>нейросетей</span>
                </Title>
                <P className={cls.text} size={'lg'}>
                    Без VPN, зарубежных карт и сложностей
                </P>
                <ChatForm className={cls.form} />
            </div>
            <div className={cls.listWrapper}>
                <div className={cls.list}>
                    <Button
                        fontSize={'xs'}
                        className={cls.item}
                        variant={'ghost'}
                        padding={'none'}
                        hSize={'none'}
                    >
                        <div className={cls.box}>
                            <ChatGptSvg />
                        </div>
                        ChatGPT 5.2
                    </Button>
                    <Button
                        fontSize={'xs'}
                        className={cls.item}
                        variant={'ghost'}
                        padding={'none'}
                        hSize={'none'}
                    >
                        <div className={cls.box}>
                            <GeminiSvg />
                        </div>
                        Gemini 3 Pro
                    </Button>
                    <Button
                        fontSize={'xs'}
                        className={cls.item}
                        variant={'ghost'}
                        padding={'none'}
                        hSize={'none'}
                    >
                        <div className={cls.box}>
                            <GrokSvg />
                        </div>
                        Grok-4
                    </Button>
                    <Button
                        fontSize={'xs'}
                        className={cls.item}
                        variant={'ghost'}
                        padding={'none'}
                        hSize={'none'}
                    >
                        <div className={cls.box}>
                            <ClaudeSvg />
                        </div>
                        Claude
                    </Button>
                    <Button
                        fontSize={'xs'}
                        className={cls.item}
                        variant={'ghost'}
                        padding={'none'}
                        hSize={'none'}
                    >
                        <div className={cls.box}>
                            <GalleryRoundSvg />
                        </div>
                        Генератор изображений
                    </Button>
                    <Button
                        fontSize={'xs'}
                        className={cls.item}
                        variant={'ghost'}
                        padding={'none'}
                        hSize={'none'}
                    >
                        <div className={cls.box}>
                            <LogoSvg />
                        </div>
                        Все нейросети{' '}
                    </Button>
                </div>
            </div>
        </Container>
    );
};
