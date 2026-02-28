import type { PropsWithChildren } from 'react';

import { StreamingText } from '@/features/StreamingText';

import { type Message, messagesActions } from '@/entities/chat';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch.tsx';

import cls from './Answer.module.css';

interface AnswerProps {
    status: Message['status'];
}

export const Answer = ({
    children,
    status,
}: PropsWithChildren<AnswerProps>) => {
    const dispatch = useAppDispatch();


    if (status === 'streaming') {
        return (
            <div className={cls.answer}>
                <StreamingText
                    onDone={() => dispatch(messagesActions.finishStreaming())}
                    text={String(children)}
                />
            </div>
        );
    }

    return <div className={cls.answer}>{children}</div>;
};
