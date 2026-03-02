import type { ReactNode } from 'react';

import { ChatIconsPage, HomePage } from '@/pages/HomePage';
import { ErrorsImagePage } from '@/pages/HomePage/ui/ErrorsImagePage.tsx';
import { FilesPage } from '@/pages/HomePage/ui/FilesPage.tsx';
import { SendingPage } from '@/pages/HomePage/ui/SendingPage.tsx';
import { ProjectsPage } from '@/pages/ProjectsPage';
import ProjectsWithProject from '@/pages/ProjectsPage/ui/ProjectsWithProject.tsx';
import {ProjectPage} from "@/pages/ProjectPage";

export enum PagePaths {
    HOME = '/',
    PROJECTS = '/projects',
    PROJECT = '/project',
}

interface Route {
    path: PagePaths | string;
    element: ReactNode;
}

interface Config {
    default: Route[];
    withoutPanel: Route[];
}

export const routesConfig: Config = {
    default: [
        {
            path: PagePaths.HOME,
            element: <HomePage />,
        },
        {
            path: 'chat-icons',
            element: <ChatIconsPage />,
        },
        {
            path: 'sending-page',
            element: <SendingPage />,
        },
        {
            path: 'errors-image',
            element: <ErrorsImagePage />,
        },
        {
            path: 'files-page',
            element: <FilesPage />,
        },
        {
            path: PagePaths.PROJECTS,
            element: <ProjectsPage />,
        },

        {
            path: 'projects-with-project',
            element: <ProjectsWithProject />,
        },

    ],
    withoutPanel: [
        {
            path: PagePaths.PROJECT,
            element: <ProjectPage />,
        },
    ]
} as const;

