import clsx from 'clsx';
import { motion } from 'framer-motion';

import cls from './Messages.module.css';
import {Message} from "./Message.tsx";

interface MessagesProps {
    messages: {type:'send' | 'answer', message:string}[];
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
          {messages.map(({type, message}) =>(type === 'send' ? <Message>{message}</Message>: 'a') )}

        </motion.div>
    );
};
