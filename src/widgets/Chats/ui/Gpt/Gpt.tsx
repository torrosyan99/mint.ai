import { ChatForm } from '@/features/ChatForm';

import {
    messagesActions,
    selectMessages,
    selectSending,
} from '@/entities/chat';
import { getAnswer } from '@/entities/chat';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch.tsx';
import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import { Chat } from '../Chat/Chat.tsx';
import cls from './Gpt.module.css';
import { List } from './List.tsx';

export const Gpt = () => {
    const messages = useAppSelector(selectMessages);
    const sending = useAppSelector(selectSending);
    const dispatch = useAppDispatch();
    return (
        <>
            <Chat
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
                    disabled={messages.length > 0 && sending}
                    onSubmit={(text) => {
                        dispatch(
                            messagesActions.addMessage({
                                type: 'send' as const,
                                message: text,
                            }),
                        );
                        dispatch(getAnswer());
                    }}
                />
            </Chat>
        </>
    );
};
