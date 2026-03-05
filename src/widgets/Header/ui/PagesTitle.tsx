import { matchPath, useLocation } from 'react-router-dom';

import { AiSelect } from '@/features/AiSelect';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { P } from '@/shared/ui/P/P.tsx';

export const PagesTitle = () => {
    const { pathname } = useLocation();

    const isProjectPage = [PagePaths.PROJECT, PagePaths.PROJECTS].some((path) =>
        matchPath({ path, end: true }, pathname),
    );
    if (isProjectPage) return (
            <P font={'medium'} size={'lg'}>
                Проекты
            </P>
        );

    const isFilesPage = [PagePaths.VIDEOS, PagePaths.IMAGES, PagePaths.DOCUMENTS, PagePaths.AUDIO].some((path) =>
      matchPath({ path, end: true }, pathname))

    if(isFilesPage) return ( <P font={'medium'} size={'lg'} color={'var(--color-10)'}>
        Мои файлы
    </P>)

    return <AiSelect />;

};
