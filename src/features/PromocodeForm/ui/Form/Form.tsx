import { type SyntheticEvent, useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import type { FormType } from '../PromocodeForm/PromocodeForm.tsx';
import { Error } from './Error.tsx';
import cls from './Form.module.css';

interface FormProps {
    setType: (type: FormType) => void;
    type: FormType;
}

export const Form = ({ setType, type }: FormProps) => {
    const [value, setValue] = useState('');
    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value === 'promo') setType('SUCCESS');
        else setType('ERROR');
    };
    return (
        <form onSubmit={onSubmit}>
            {type === 'ERROR' && <Error />}
            <Input
                className={cls.input}
                placeholder={'Промокод'}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <P className={cls.text} size={'xs'}>
                Введите промокод без лишних символов и пробелов.
            </P>
            <Button
                variant={'green'}
                hSize={'xl'}
                disabled={value.length === 0}
                wFull
                center
            >
                Активировать
            </Button>
        </form>
    );
};
