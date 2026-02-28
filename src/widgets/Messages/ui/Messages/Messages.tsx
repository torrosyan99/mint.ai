import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Answer } from '../Answer/Answer.tsx';
import { Message } from '../Message/Message.tsx';
import cls from './Messages.module.css';

export type ChatMessage =
  | { type: 'send'; message: string, status?: never }
  | { type: 'answer'; message: string; status: 'waiting' | 'done' | 'streaming' };

interface MessagesProps {
  messages: ChatMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
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
        </motion.div>
    );
};
