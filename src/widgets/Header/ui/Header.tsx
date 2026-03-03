import { AiSelect } from '@/features/AiSelect';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import CountAddSvg from '@icons/add-count.svg?react';
import CountSvg from '@icons/count-icon.svg?react';
import HamburgerSvg from '@icons/hamburger.svg?react';
import PanelIconSvg from '@icons/panel-icon.svg?react';

import cls from './Header.module.css';
import { PagesTitle } from './PagesTitle.tsx';

interface HeaderProps {
    setSidebarIsOpen: (b: boolean) => void;
    setPanelIsOpen: (b: boolean) => void;
}

export const Header = ({ setSidebarIsOpen, setPanelIsOpen }: HeaderProps) => {
    const sidebarOpenClick = () => setSidebarIsOpen(true);
    const panelOpenClick = () => setPanelIsOpen(true);
    const isMobile = useMediaQuery('(max-width: 1280px)');

    return (
        <header className={cls.header}>
            <button className={cls.menuButton} onClick={sidebarOpenClick}>
                <HamburgerSvg />
            </button>
            {isMobile ? <AiSelect /> : <PagesTitle />}
            <Button variant={'primary'} className={cls.button} hoverNone>
                <CountSvg />
                100 500
                <span className={cls.countAdd}>
                    <CountAddSvg />
                </span>
            </Button>
            <button className={cls.panelButton} onClick={panelOpenClick}>
                <PanelIconSvg />
            </button>
        </header>
    );
};
