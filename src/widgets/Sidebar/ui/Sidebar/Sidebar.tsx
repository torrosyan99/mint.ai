import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { motionCompactOptions } from '@/shared/helpers';
import { useBlockHeight } from '@/shared/hooks/useBlockHeight.tsx';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Line } from '@/shared/ui/Line/Line.tsx';
import { SimpleBar } from '@/shared/ui/SimpleBar/SimpleBar.tsx';

import { getIsCompactClass } from '../../helpers/getIsCompactClass.ts';
import { Header } from '../Header/Header';
import { History } from '../History/History.tsx';
import { Navigation } from '../Navigation/Navigation.tsx';
import { NewChatButton } from '../NewChatButton/NewChatButton.tsx';
import { Pro } from '../Pro/Pro.tsx';
import { ThemesExit } from '../ThemesExit/ThemesExit.tsx';
import { User } from '../User/User.tsx';
import cls from './Sidebar.module.css';

const sidebarVariants = {
    expanded: { width: 'var(--sidebar-width)' },
    compact: { width: 'var(--sidebar-compact-width)' },
};

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
    const isMobile = useMediaQuery('(max-width: 1280px)');
    const [isCompact, setIsCompact] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const { height } = useBlockHeight(bottomRef);
    const isCompactEffective = !isMobile && isCompact;
    const isCompactClass = getIsCompactClass(isCompactEffective, cls);
    const sidebarCloseClick = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('body-overflow');
        } else {
            document.body.classList.remove('body-overflow');
        }
    }, [isOpen]);

    return (
        <>
            {isMobile && isOpen && (
                <div className={cls.outline} onClick={sidebarCloseClick} />
            )}
            <motion.aside
                className={clsx(cls.sidebar, {
                    [cls.opened]: isOpen,
                })}
                {...motionCompactOptions(sidebarVariants, isCompactEffective)}
            >
                <SimpleBar
                    style={{ paddingBottom: height + 20 }}
                    className={clsx(cls.simpleBar, isCompactClass)}
                >
                    <Header
                        isCompact={isCompactEffective}
                        setIsCompact={setIsCompact}
                        setIsOpen={setIsOpen}
                    />
                    <NewChatButton isCompact={isCompactEffective} />
                    <Navigation isCompact={isCompactEffective} />
                    <Line className={clsx(cls.line, isCompactClass)} />
                    <History isCompact={isCompactEffective} />
                </SimpleBar>
                <div
                    ref={bottomRef}
                    className={clsx(cls.bottom, isCompactClass)}
                >
                    <Pro isCompact={isCompactEffective} />
                    <User isCompact={isCompactEffective} />
                    <ThemesExit isCompact={isCompactEffective} />
                </div>
            </motion.aside>
        </>
    );
};
