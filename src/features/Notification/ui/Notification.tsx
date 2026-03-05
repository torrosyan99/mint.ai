import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import cls from './Notification.module.css';

const buttonProps = {
    hSize: 'sm',
    padding: 'lg',
    fontSize: 'xs',
    radius: 'sm',
} as const;

const notificationVariants = {
    initial: {
        y: 15,
        opacity:0,
        x:'-50%'
    },
    animate: {
        y: 0,
        opacity:1,
        x:'-50%'
    },
    exit: {
        y: 15,
        opacity:0,
        x:'-50%'
    },
};
export const Notification = () => {
    const [isShow, setIsShowed] = useState(true);
    const onClose = () => setIsShowed(false);
    return (
        <AnimatePresence mode={'wait'}>
            {isShow && (
                <motion.div
                  key={'notification'}
                    className={cls.notification}
                    variants={notificationVariants}
                    initial={'initial'}
                    exit={'exit'}
                    animate={'animate'}
                >
                    <Box
                        as={motion.div}
                        className={cls.box}
                        radius={'md'}
                        padding={'xl'}
                        shadow
                    >
                        <P
                            className={cls.title}
                            size={'lg'}
                            font={'medium'}
                            color={'var(--color-10)'}
                        >
                            Добавить в избранное?
                        </P>
                        <Buttons justifyContent={'center'}>
                            <Button
                                {...buttonProps}
                                variant={'primary'}
                                onClick={onClose}
                            >
                                Отмена
                            </Button>
                            <Button {...buttonProps} variant={'dark'}>
                                Добавить
                            </Button>
                        </Buttons>
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
