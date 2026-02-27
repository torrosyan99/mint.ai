import clsx from 'clsx';
import { motion } from 'framer-motion';

import cls from './Messages.module.css';

interface MessagesProps {
    hasMessages: boolean;
}

export const Messages = ({ hasMessages }: MessagesProps) => {
    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.25, delay: 0.2 } }}
            className={clsx(cls.messages, {
                [cls.hasMessages]: hasMessages,
            })}
        ></motion.div>
    );
};
