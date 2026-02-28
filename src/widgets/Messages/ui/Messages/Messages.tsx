import clsx from 'clsx';
import { motion } from 'framer-motion';



import {selectMessages, selectSending} from '@/entities/chat';



import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { TypingIndicator } from '@/shared/ui/TypingIndicator/TypingIndicator.tsx';



import { Answer } from '../Answer/Answer.tsx';
import { Message } from '../Message/Message.tsx';
import cls from './Messages.module.css';

















export const Messages = () => {
    const messages = useAppSelector(selectMessages);
    const sending = useAppSelector(selectSending);
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

            {
              sending &&  (<div className={cls.indicator}>
                    <TypingIndicator />
                </div>)
            }
        </motion.div>
    );
};
