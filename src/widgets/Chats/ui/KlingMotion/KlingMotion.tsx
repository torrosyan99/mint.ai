import { ChatForm } from '@/features/ChatForm';

import {
    messagesActions,
    selectMessages,
    selectSending,
} from '@/entities/chat';
import { getAnswer } from '@/entities/chat';

import klingMotion from '@/shared/assets/images/kling-motion.png';
import CountSvg from '@icons/count-icon.svg?react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.tsx';
import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import { Chat } from '../Chat/Chat.tsx';
import cls from './KlingMotion.module.css';

export const KlingMotion = () => {
    const messages = useAppSelector(selectMessages);
    const sending = useAppSelector(selectSending);
    const dispatch = useAppDispatch();
    return (
        <>
            <Chat
                Top={
                    <>
                        <div className={cls.title}>
                            <Title h={'h5'}>Kling Motion Control</Title>
                            <img src={klingMotion} alt={'kling-motion'} />
                        </div>
                        <P className={cls.text}>
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

              <P className={cls.bottomText} size={'sm'}>
                Стоимость 400 <CountSvg /> за одно сообщение. Нейросеть может ошибаться
              </P>
            </Chat>
        </>
    );
};
