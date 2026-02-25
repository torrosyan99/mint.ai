import { motion } from 'framer-motion';
import type { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { motionCompactOptions, motionHiddenOptions } from '@/shared/helpers';


import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './Navigation.module.css';

type NavigationButtonProps = {
    icon: ReactNode;
    isCompact: boolean;
    to: string;
    className?: string;
};

const iconVariants = {
    expanded: { x: 8, y: '-50%' },
    compact: { x: 10, y: '-50%' },
};

export const NavigationButton = ({
    children,
    icon,
    isCompact,
    className,
    to,
}: PropsWithChildren<NavigationButtonProps>) => {
    return (
        <Button
            className={className}
            as={Link}
            to={to}
            variant="ghost"
            fontSize={'xs'}
        >
            <motion.span
                className={cls.icon}
                {...motionCompactOptions(iconVariants, isCompact)}
            >
                {icon}
            </motion.span>
            <motion.span
                className={cls.value}
                {...motionHiddenOptions(fadeOpacityVariants, isCompact)}
            >
                {children}
            </motion.span>
        </Button>
    );
};
