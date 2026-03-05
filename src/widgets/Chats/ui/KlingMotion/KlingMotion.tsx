import type { Dispatch, SetStateAction } from 'react';

import type { Message } from '@/widgets/Messages';

import { ChatForm } from '@/features/ChatForm';

import klingMotion from '@/shared/assets/images/kling-motion.png';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import CountSvg from '@icons/count-icon.svg?react';

import { Chat } from '../Chat/Chat.tsx';
import cls from './KlingMotion.module.css';

interface KlingMotionProps {
    messages: Message[];
    setMessages: Dispatch<SetStateAction<Message[]>>;
    sending?: boolean;
}

export const KlingMotion = ({
    messages,
    setMessages,
    sending,
}: KlingMotionProps) => {
    return (
        <>
            <Chat
                sending={sending}
                messages={messages}
                Top={
                    <>
                        <div className={cls.title}>
                            <Title h={'h5'} color={'var(--color-5)'}>Kling Motion Control</Title>
                            <img src={klingMotion} alt={'kling-motion'} />
                        </div>
                        <P className={cls.text} color={'var(--color-14)'}>
                            Kling Motion Control — нейросеть, которая умеет
                            переносить движения из видео на персонажа с
                            изображения, сохраняя физику тела, ракурс и кадр.
                            Видео может генерироваться до 20 минут{' '}
                        </P>
                    </>
                }
            >
                <ChatForm
                    className={cls.form}
                    banner={messages.length > 0}
                    onSubmit={(text) =>
                        setMessages([
                            ...messages,
                            { type: 'send', message: text },
                        ])
                    }
                />

                <P className={cls.bottomText} size={'sm'} color={'var(--color-13)'}>
                    Стоимость 400 <CountSvg /> за одно сообщение. Нейросеть
                    может ошибаться
                </P>
            </Chat>
        </>
    );
};
