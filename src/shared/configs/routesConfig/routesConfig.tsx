import type {ReactNode} from 'react';

import {ChatIconsPage, HomePage} from '@/pages/HomePage';
import {ErrorsImagePage} from '@/pages/HomePage/ui/ErrorsImagePage.tsx';
import {SendingPage} from '@/pages/HomePage/ui/SendingPage.tsx';
import {FilesPage} from "@/pages/HomePage/ui/FilesPage.tsx";
import {ProjectsPage} from "@/pages/ProjectsPage";

export enum PagePaths {
  HOME = '/',
  PROJECT = '/projects',
}

interface Route {
  path: PagePaths | string;
  element: ReactNode;
}

interface Config {
  default: Route[];
}

export const routesConfig: Config = {
  default: [
    {
      path: PagePaths.HOME,
      element: <HomePage/>,
    },
    {
      path: 'chat-icons',
      element: <ChatIconsPage/>,
    },
    {
      path: 'sending-page',
      element: <SendingPage/>,
    },
    {
      path: 'errors-image',
      element: <ErrorsImagePage/>,
    },
    {
      path: 'files-page',
      element: <FilesPage/>,
    },
    {
      path: PagePaths.PROJECT,
      element: <ProjectsPage/>
    }
  ],
} as const;
