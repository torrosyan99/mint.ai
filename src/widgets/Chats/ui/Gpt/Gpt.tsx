import clsx from 'clsx';
import { useState } from 'react';

import { ChatForm } from '@/features/ChatForm';

import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import { Chat } from '../Chat/Chat.tsx';
import cls from './Gpt.module.css';
import { List } from './List.tsx';

export const Gpt = () => {
    const [messages, setMessages] = useState<
        { type: 'send' | 'answer'; message: string }[]
    >([]);
    return (
        <>
            <Chat
                messages={messages}
                Top={
                    <>
                        <Title h={'h3'}>
                            Простой старт в мир{' '}
                            <span className={cls.titleSpan}>нейросетей</span>
                        </Title>
                        <P className={cls.text} size={'lg'}>
                            Без VPN, зарубежных карт и сложностей
                        </P>
                    </>
                }
                Bottom={<List />}
            >
                <ChatForm
                    className={cls.form}
                    onSubmit={(e) =>
                        setMessages([
                            ...messages,
                            {
                                type: 'send',
                                message: e,
                            },
                        ])
                    }
                />
            </Chat>
        </>
    );
};
