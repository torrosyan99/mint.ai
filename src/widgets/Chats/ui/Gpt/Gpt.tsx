import type { Dispatch, SetStateAction } from 'react';

import type { Message } from '@/widgets/Messages';

import {type AllFile, ChatForm} from '@/features/ChatForm';

import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import { Chat } from '../Chat/Chat.tsx';
import cls from './Gpt.module.css';
import { List } from './List.tsx';

interface GptProps {
    messages: Message[];
    setMessages: Dispatch<SetStateAction<Message[]>>;
    sending?: boolean;
    files?: AllFile[]
}

export const Gpt = ({ messages, setMessages, sending, files }: GptProps) => {
    return (
        <>
            <Chat
                sending={sending}
                messages={messages}
                Top={
                    <>
                        <Title h={'h3'}>
                            Простой старт в мир{' '}
                            <span className={cls.titleSpan}>нейросетей</span>
                        </Title>
                        <P className={cls.text} color={'var(--color-14)'} size={'lg'}>
                            Без VPN, зарубежных карт и сложностей
                        </P>
                    </>
                }
                Bottom={<List />}
            >
                <ChatForm
                  files={files}
                    className={cls.form}
                    banner={messages.length > 0}
                    onSubmit={(text) =>
                        setMessages([
                            ...messages,
                            { type: 'send', message: text },
                        ])
                    }
                />
            </Chat>
        </>
    );
};
