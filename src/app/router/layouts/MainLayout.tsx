import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { ServicesPanel } from '@/widgets/ServicesPanel';
import { Sidebar } from '@/widgets/Sidebar';

import { SimpleBar } from '@/shared/ui/SimpleBar/SimpleBar.tsx';

export const MainLayout = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [panelIsOpen, setPanelIsOpen] = useState(false);
    const [panelIsCompact, setPanelIsCompact] = useState(false);
    return (
        <>
            <Sidebar isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
                <SimpleBar
                  className={"content"}
                >
                    <Header
                        panelIsCompact={panelIsCompact}
                        setPanelIsCompact={setPanelIsCompact}
                        setSidebarIsOpen={setSidebarIsOpen}
                        setPanelIsOpen={setPanelIsOpen}
                    />
                    <Outlet />
                </SimpleBar>

            <ServicesPanel
                isOpen={panelIsOpen}
                setIsOpen={setPanelIsOpen}
                isCompact={panelIsCompact}
                setIsCompact={setPanelIsCompact}
            />
        </>
    );
};
