import clsx from 'clsx';
import { useState } from 'react';

import { ChatForm } from '@/features/ChatForm';

import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import { Chat } from '../Chat/Chat.tsx';
import cls from './Gpt.module.css';
import { List } from './List.tsx';

export const Gpt = () => {
    const [text, setText] = useState('');
    return (
        <>
            <Chat
                hasMessage={text.length > 0}
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
                <div
                    className={clsx(cls.message, {
                        [cls.hasMessage]: text.length > 0,
                    })}
                ></div>
                <ChatForm className={cls.form} onSubmit={(e) => setText(e)} />
            </Chat>
        </>
    );
};
