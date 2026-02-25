import {Route, Routes} from 'react-router-dom';

import { routesConfig} from '@/shared/configs/routesConfig/routesConfig.tsx';
import {MainLayout} from "@/app/router/layouts/MainLayout.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        {routesConfig.default.map(({path, element}) => (
          <Route path={path} element={element}/>
        ))}
      </Route>

    </Routes>
  );
};
