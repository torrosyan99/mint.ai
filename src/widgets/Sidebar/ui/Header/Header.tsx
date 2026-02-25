import { motion } from 'framer-motion';

import { motionCompactOptions, motionHiddenOptions } from '@/shared/helpers';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Logo } from '@/shared/ui/Logo/Logo.tsx';

import BarButtonSvg from '@icons/bar-button.svg?react';

import cls from './Header.module.css';

interface HeaderProps {
    isCompact: boolean;
    setIsCompact: (b: boolean) => void;
    setIsOpen: (b: boolean) => void;
}

const logoVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -8 },
};

const buttonVariants = {
    expanded: { left: '100%', x: '-20px', y: '-50%' },
    compact: { left: '50%', x: '-50%', y: '-50%' },
};

export const Header = ({ isCompact, setIsCompact, setIsOpen }: HeaderProps) => {
    const compactClick = () => setIsCompact(!isCompact);
    const sidebarCloseClick = () => setIsOpen(false);
    const isMobile = useMediaQuery('(max-width: 1280px)');

    return (
        <div className={cls.header}>
            <motion.div {...motionHiddenOptions(logoVariants, isCompact)}>
                <Logo />
            </motion.div>
            <motion.button
                className={cls.button}
                onClick={isMobile ? sidebarCloseClick : compactClick}
                {...motionCompactOptions(buttonVariants, isCompact)}
            >
                <BarButtonSvg />
            </motion.button>
        </div>
    );
};
