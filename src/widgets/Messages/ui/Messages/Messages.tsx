import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TypingIndicator } from '@/shared/ui/TypingIndicator/TypingIndicator.tsx';

import { Answer } from '../Answer/Answer.tsx';
import { Message } from '../Message/Message.tsx';
import cls from './Messages.module.css';

export type Message =
    | { type: 'send'; message: string, status?:never }
    | { type: 'answer'; message?: string, status: "done" | 'no-subscription' };

interface MessagesProps {
    messages: Message[];
    sending?: boolean;
}

export const Messages = ({ messages, sending }: MessagesProps) => {
    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.25, delay: 0.2 } }}
            className={clsx(cls.messages, {
                [cls.noMessages]: messages.length === 0,
            })}
        >
            {messages.map(({ type, message, status }) =>
                type === 'send' ? (
                    <Message>{message}</Message>
                ) : (
                    <Answer status={status}>{message}</Answer>
                ),
            )}

            {sending && (
                <div className={cls.indicator}>
                    <TypingIndicator />
                </div>
            )}
        </motion.div>
    );
};
