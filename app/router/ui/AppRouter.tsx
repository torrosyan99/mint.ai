import { Route, Routes } from 'react-router-dom';

import { routesConfig } from '@/shared/helpers/routesConfig/routesConfig.tsx';

export const AppRouter = () => {
    return (
        <Routes>
            {routesConfig.map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};
