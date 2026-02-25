import {Suspense, useEffect} from 'react';
import './styles/main.css';
import {useAppSelector} from "@/shared/hooks/useAppSelector.tsx";
import {selectTheme} from '@/entities/theme/model/actions';
import {AppRouter} from "@/app/router";

function App() {
  const theme = useAppSelector(selectTheme);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={'app'}>
        <Suspense>
          <AppRouter/>
        </Suspense>
    </div>
  );
}

export default App;
