import { motion } from 'framer-motion';
import { useState } from 'react';

import { Navigation } from '@/widgets/ServicesPanel/ui/Navigation/Navigation.tsx';

import { motionCompactOptions } from '@/shared/helpers';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { MobileSheet } from '@/shared/ui/MobileSheet/MobileSheet.tsx';

import { Header } from '../Header/Header.tsx';
import cls from './ServicesPanel.module.css';

const panelVariants = {
    expanded: { width: 'var(--sidebar-width)' },
    compact: { width: 'var(--sidebar-compact-width)' },
};

interface ServicesPanelProps {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
}

export const ServicesPanel = ({ isOpen, setIsOpen }: ServicesPanelProps) => {
    const [isCompact, setIsCompact] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1280px)');
    const isCompactEffective = !isMobile && isCompact;
    const content = (
        <>
            <Header
                isCompact={isCompactEffective}
                setIsCompact={setIsCompact}
            />
            <Navigation isCompact={isCompactEffective} />
        </>
    );

    return isMobile ? (
        <MobileSheet className={cls.sheet} isOpen={isOpen} setIsOpen={setIsOpen}>
            {content}
        </MobileSheet>
    ) : (
        <motion.aside
            className={cls.panel}
            {...motionCompactOptions(panelVariants, isCompact)}
        >
            {content}
        </motion.aside>
    );
};
