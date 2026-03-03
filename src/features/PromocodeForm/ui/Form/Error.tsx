import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ErrorSvg from '@icons/error.svg?react';

import cls from './Form.module.css';

export const Error = () => {
    return (
        <div className={cls.error}>
            <ErrorSvg  />
            <Title className={cls.errorTitle} h={'h5'}>
                Промокод недействителен
            </Title>
            <P className={cls.errorText}>
                Проверьте написание: код может быть просрочен или введён с
                ошибкой.
            </P>
        </div>
    );
};
