import { motion } from 'framer-motion';

import { motionCompactOptions, motionHiddenOptions } from '@/shared/helpers';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';

import BarButtonSvg from '@icons/bar-button.svg?react';

import cls from './Header.module.css';

interface HeaderProps {
    isCompact: boolean;
    setIsCompact: (b: boolean) => void;
}

const buttonVariants = {
    expanded: { left: '0', x: '16px', y: '-50%' },
    compact: { left: '50%', x: '-50%', y: '-50%' },
};

const searchVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 8 },
};
export const Header = ({ isCompact, setIsCompact }: HeaderProps) => {
    const onClick = () => setIsCompact(!isCompact);
    const isMobile = useMediaQuery('(max-width: 1280px)');

    return (
        <div className={cls.header}>
            {!isMobile && (
                <motion.button
                    onClick={onClick}
                    className={cls.button}
                    {...motionCompactOptions(buttonVariants, isCompact)}
                >
                    <BarButtonSvg />
                </motion.button>
            )}
            <motion.div className={cls.searchWrapper} {...motionHiddenOptions(searchVariants, isCompact)}>
                <Search className={cls.search} placeholder={'Поиск'} padding={'sm'} />
            </motion.div>
        </div>
    );
};
