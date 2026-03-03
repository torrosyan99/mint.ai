import type { ReactNode } from 'react';

import { AllAiPage } from '@/pages/AllAiPage';
import AllServicesPage from '@/pages/AllServicesPage/ui/AllServicesPage.tsx';
import { AudioPage } from '@/pages/AudioPage';
import { DocumentsPage } from '@/pages/DocumentsPage';
import { ChatIconsPage, HomePage } from '@/pages/HomePage';
import { ErrorsImagePage } from '@/pages/HomePage/ui/ErrorsImagePage.tsx';
import { FilesPage } from '@/pages/HomePage/ui/FilesPage.tsx';
import HomePageWithTarrifs from '@/pages/HomePage/ui/HomePageWithTarrifs.tsx';
import { SendingPage } from '@/pages/HomePage/ui/SendingPage.tsx';
import { ImagesPage } from '@/pages/ImagesPage';
import { ImagesWithImage } from '@/pages/ImagesPage/ui/ImagesWithImage.tsx';
import { ProjectPage } from '@/pages/ProjectPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectsWithProject } from '@/pages/ProjectsPage/ui/ProjectsWithProject.tsx';
import { VideosPage } from '@/pages/VideosPage';

export enum PagePaths {
    HOME = '/',
    PROJECTS = '/projects',
    PROJECT = '/project',
    VIDEOS = '/videos',
    DOCUMENTS = '/documents',
    AUDIO = '/audio',
    IMAGES = '/images',
    ALL_AI = '/all-ai',
    ALL_SERVICES = '/all-services',
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
        {
            path: PagePaths.AUDIO,
            element: <AudioPage />,
        },
        {
            path: PagePaths.IMAGES,
            element: <ImagesPage />,
        },
        {
            path: 'images-with-image',
            element: <ImagesWithImage />,
        },
        {
            path: PagePaths.DOCUMENTS,
            element: <DocumentsPage />,
        },
        {
            path: PagePaths.VIDEOS,
            element: <VideosPage />,
        },
        {
            path: 'page-with-tarrifs',
            element: <HomePageWithTarrifs />,
        },
        {
            path: PagePaths.ALL_AI,
            element: <AllAiPage />,
        },
        {
            path: PagePaths.ALL_SERVICES,
            element: <AllServicesPage />,
        },
    ],
    withoutPanel: [
        {
            path: PagePaths.PROJECT,
            element: <ProjectPage />,
        },
    ],
};
