import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { ServicesPanel } from '@/widgets/ServicesPanel';
import { Sidebar } from '@/widgets/Sidebar';

export const MainLayout = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [panelIsOpen, setPanelIsOpen] = useState(false);
    const [panelIsCompact, setPanelIsCompact] = useState(false);
    return (
        <>
            <Sidebar isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
            <div className={'content'}>
                <Header
                    panelIsCompact={panelIsCompact}
                    setPanelIsCompact={setPanelIsCompact}
                    setSidebarIsOpen={setSidebarIsOpen}
                    setPanelIsOpen={setPanelIsOpen}
                />
                <Outlet />
            </div>
            <ServicesPanel
                isOpen={panelIsOpen}
                setIsOpen={setPanelIsOpen}
                isCompact={panelIsCompact}
                setIsCompact={setPanelIsCompact}
            />
        </>
    );
};
