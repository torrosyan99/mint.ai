import { matchPath, useLocation } from 'react-router-dom';

import { AiSelect } from '@/features/AiSelect';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { P } from '@/shared/ui/P/P.tsx';

export const PagesTitle = () => {
    const { pathname } = useLocation();
    const isHomePage = !!matchPath(
        { path: PagePaths.HOME, end: true },
        pathname,
    );
    const isProjectPage = !!matchPath(
        { path: PagePaths.PROJECT, end: true },
        pathname,
    );
    if (isHomePage) {
        return <AiSelect />;
    } else if (isProjectPage)
        return (
            <P font={'medium'} size={'lg'}>
                Проекты
            </P>
        );
};
