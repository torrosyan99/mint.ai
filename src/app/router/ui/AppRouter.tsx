import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/app/router/layouts/MainLayout.tsx';
import { WithoutPanelLayout } from '@/app/router/layouts/WithoutPanelLayout.tsx';

import { routesConfig } from '@/shared/configs/routesConfig/routesConfig.tsx';

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                {routesConfig.default.map(({ path, element }) => (
                    <Route path={path} element={element} />
                ))}
            </Route>
            <Route element={<WithoutPanelLayout />}>
                {routesConfig.withoutPanel.map(({ path, element }) => (
                    <Route path={path} element={element} />
                ))}
            </Route>
        </Routes>
    );
};
