import type {ReactNode} from 'react';
import {HomePage} from '@/pages/HomePage';


export enum PagePaths {
  HOME = '/',
}

interface Route {
  path: PagePaths ;
  element: ReactNode;
}

interface Config {
  'default': Route[];
}

export const routesConfig: Config = {
  default: [{
    path: PagePaths.HOME,
    element: <HomePage/>,
  }]
} as const;