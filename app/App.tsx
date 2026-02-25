import { Suspense, useEffect } from 'react';
import 'simplebar-react/dist/simplebar.min.css';

import { AppRouter } from '@/app/router';

import { Header } from '@/widgets/Header';
import { ServicesPanel } from '@/widgets/ServicesPanel';
import { Sidebar } from '@/widgets/Sidebar';

import { selectTheme } from '@/entities/theme';

import { useAppSelector } from '../shared/hooks/useAppSelector';
import './styles/main.css';

function App() {
    const theme = useAppSelector(selectTheme);
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={'app'}>
            <Sidebar />
            <main className={'main'}>
                <Header />
                <Suspense>
                    <AppRouter />
                </Suspense>
            </main>
            <ServicesPanel />
        </div>
    );
}

export default App;
