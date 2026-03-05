import { AiSelect } from '@/features/AiSelect';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import CountAddSvg from '@icons/add-count.svg?react';
import AiIconsSvg from '@icons/ai-icons.svg?react';
import CountSvg from '@icons/count-icon-2.svg?react';
import HamburgerSvg from '@icons/hamburger.svg?react';
import PanelIconSvg from '@icons/panel-icon.svg?react';

import cls from './Header.module.css';
import { PagesTitle } from './PagesTitle.tsx';

interface HeaderProps {
    setSidebarIsOpen: (b: boolean) => void;
    setPanelIsOpen: (b: boolean) => void;
    panelIsCompact: boolean;
    setPanelIsCompact: (b: boolean) => void;
}

export const Header = ({
    setSidebarIsOpen,
    setPanelIsOpen,
    panelIsCompact,
  setPanelIsCompact,
}: HeaderProps) => {
    const sidebarOpenClick = () => setSidebarIsOpen(true);
    const mobileSheetOpenClick = () => setPanelIsOpen(true);
    const paneOpenClick = () => setPanelIsCompact(false);
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
            {panelIsCompact && !isMobile && (
                <Button
                    variant={'primary'}
                    fontSize={'xs'}
                    hoverNone
                    padding={'md'}
                    onClick={paneOpenClick}
                >
                    <AiIconsSvg />
                    AI сервисы
                </Button>
            )}
            <button className={cls.panelButton} onClick={mobileSheetOpenClick}>
                <PanelIconSvg />
            </button>
        </header>
    );
};
