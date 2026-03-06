import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { ServicesPanel } from '@/widgets/ServicesPanel';
import { Sidebar } from '@/widgets/Sidebar';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { SimpleBar } from '@/shared/ui/SimpleBar/SimpleBar.tsx';

export const WithoutPanelLayout = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [panelIsOpen, setPanelIsOPen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1280px)');
    return (
        <>
            <Sidebar isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
            <SimpleBar className={'content'}>
                <Header
                    setSidebarIsOpen={setSidebarIsOpen}
                    setPanelIsOpen={setPanelIsOPen}
                />
                <Outlet />
            </SimpleBar>
            {isMobile && (
                <ServicesPanel
                    isOpen={panelIsOpen}
                    setIsOpen={setPanelIsOPen}
                />
            )}
        </>
    );
};
