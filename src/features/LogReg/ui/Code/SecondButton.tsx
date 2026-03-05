import { useEffect, useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './Code.module.css';

export const SecondButton = () => {
    const [second, setSecond] = useState(4);
    useEffect(() => {
        const timer = setInterval(() => {
            setSecond((s) => {
                if (s <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return s - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Button
            className={cls.button}
            hSize={'xl'}
            variant={'none'}
            disabled={second !== 0}
            radius={'sm'}
            center
        >
            Запросить код повторно {second !== 0 && `(${second} сек)`}
        </Button>
    );
};
