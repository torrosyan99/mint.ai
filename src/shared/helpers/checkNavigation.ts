import { matchPath } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';

export const checkNavigation = (path: PagePaths, pathname: string):boolean =>
    !!matchPath({ path, end: true }, pathname);
