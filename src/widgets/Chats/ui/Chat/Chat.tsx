import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import type { PropsWithChildren, ReactNode } from 'react';

import { Messages } from '@/widgets/Messages';

import { Container } from '@/shared/ui/Container/Container.tsx';

import cls from './Chat.module.css';

interface ChatProps {
    Top?: ReactNode;
    Bottom?: ReactNode;
    hasMessage: boolean;
}

const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const Chat = ({
    Top,
    Bottom,
    children,
    hasMessage,
}: PropsWithChildren<ChatProps>) => {
    return (
        <Container className={cls.chat}>
            <LayoutGroup>
                <AnimatePresence initial={false} mode="popLayout">
                    {!hasMessage && (
                        <motion.div
                            className={cls.box}
                            key="top"
                            layout
                            variants={fade}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                        >
                            {Top}
                        </motion.div>
                    )}
                </AnimatePresence>

                <Messages hasMessages={hasMessage} />

                <motion.div
                    layout
                    className={cls.content}
                    transition={{ layout: { duration: 0.25, delay: 0.2 } }}
                >
                    {children}
                </motion.div>

                <AnimatePresence initial={false} mode="popLayout">
                    {!hasMessage && (
                        <motion.div
                            className={cls.box}
                            key="bottom"
                            layout
                            variants={fade}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                        >
                            {Bottom}
                        </motion.div>
                    )}
                </AnimatePresence>
            </LayoutGroup>
        </Container>
    );
};
