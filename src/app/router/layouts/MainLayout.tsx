import {Sidebar} from "@/widgets/Sidebar";
import {Header} from "@/widgets/Header";
import {Outlet} from "react-router-dom";
import {ServicesPanel} from "@/widgets/ServicesPanel";
import {useState} from "react";

export const MainLayout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [panelIsOpen, setPanelIsOPen] = useState(false);
  return (
    <>
      <Sidebar isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
      <div className={'content'}>
        <Header setSidebarIsOpen={setSidebarIsOpen} setPanelIsOpen={setPanelIsOPen}/>
        <Outlet/>
      </div>
      <ServicesPanel  isOpen={panelIsOpen} setIsOpen={setPanelIsOPen}/>
    </>
  );
};
