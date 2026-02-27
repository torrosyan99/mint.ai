import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';
import { motionCompactOptions, motionHiddenOptions } from '@/shared/helpers';
import { Button } from '@/shared/ui/Button/Button.tsx';
import type { ButtonProps } from '@/shared/ui/Button/types.ts';

import { getIsCompactClass } from '../../helpers/getIsCompactClass.ts';
import cls from './Navigation.module.css';

interface NavigationButtonProps {
    icon: ReactNode;
    isCompact: boolean;
    to: string;
    buttonEnd?: ReactNode;
    variant?: ButtonProps['variant'];
}

const iconVariants = {
    expanded: { x: 12, y: '-50%' },
    compact: { x: 9, y: '-50%' },
};

export const NavigationButton = ({
    children,
    icon,
    isCompact,
    to,
    buttonEnd,
    variant = 'primary',
}: PropsWithChildren<NavigationButtonProps>) => {
    return (
        <Button
            className={clsx(cls.button, getIsCompactClass(isCompact, cls))}
            as={Link}
            padding={'sm'}
            to={to}
            fontSize={'xs'}
            hSize={'lgCompact'}
            variant={variant}
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
            <span className={cls.buttonEnd}>{buttonEnd}</span>
        </Button>
    );
};
