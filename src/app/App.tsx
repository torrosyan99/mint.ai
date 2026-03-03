import { Suspense, useEffect } from 'react';
import 'swiper/css';

import { AppRouter } from '@/app/router';

import { selectTheme } from '@/entities/theme/model/actions';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';

import './styles/main.css';

function App() {
    const theme = useAppSelector(selectTheme);
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={'app'}>
            <Suspense>
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
