import { useState } from 'react';

import type { ChatMessage } from '@/widgets/Messages';

import { ChatForm } from '@/features/ChatForm';

import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import { Chat } from '../Chat/Chat.tsx';
import cls from './Gpt.module.css';
import { List } from './List.tsx';

export const Gpt = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
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
                    onSubmit={(text) => {
                        const userMsg: ChatMessage = {
                            type: 'send',
                            message: text,
                        };

                        const aiMsg: ChatMessage = {
                            type: 'answer',
                            message: '',
                            status: 'waiting',
                        };

                        setMessages((prev) => [...prev, userMsg, aiMsg]);

                        setTimeout(() => {
                            setMessages((prev) => {
                                // ищем последний answer и обновляем его
                                const lastAnswerIndex = [...prev]
                                    .reverse()
                                    .findIndex((m) => m.type === 'answer');
                                if (lastAnswerIndex === -1) return prev;

                                const idx = prev.length - 1 - lastAnswerIndex;

                                return prev.map((m, i) =>
                                    i === idx && m.type === 'answer'
                                        ? {
                                              ...m,
                                              message:
                                                  'abcdabasdsadsadsadsadasdsadasdasdsad',
                                              status: 'streaming',
                                          }
                                        : m,
                                );
                            });
                        }, 4000);
                    }}
                />
            </Chat>
        </>
    );
};
