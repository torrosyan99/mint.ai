import clsx from 'clsx';
import { type HTMLMotionProps, motion } from 'framer-motion';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import cls from './P.module.css';

type BaseProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    font?: 'regular' | 'medium';
    color?: 'primary'  | 'secondary';
    className?: string;
};

type PProps = BaseProps & HTMLAttributes<HTMLParagraphElement>;
type MotionPProps = BaseProps & HTMLMotionProps<'p'>;

export const P = ({
    size = 'md',
    font = 'regular',
    color = 'primary',
    children,
    className,
}: PropsWithChildren<PProps>) => {
    return (
        <p className={clsx(cls[size], cls[font], cls[color], className)}>
            {children}
        </p>
    );
};

export const MotionP = ({
    size = 'md',
    font = 'regular',
    color = 'primary',
    className,
    children,
    ...others
}: PropsWithChildren<MotionPProps>) => {
    return (
        <motion.p
            className={clsx(cls[size], cls[font], cls[color], className)}
            {...others}
        >
            {children}
        </motion.p>
    );
};
