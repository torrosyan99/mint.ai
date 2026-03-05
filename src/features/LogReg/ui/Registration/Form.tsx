import { useState } from 'react';

import { InputItem } from '@/features/LogReg/ui/LogReg/InputItem.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './Registration.module.css';

export const Form = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    });
    return (
        <form className={cls.form}>
            <InputItem
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                title={'E-mail'}
                placeholder={'Укажите вашу почту'}
            />
            <InputItem
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                title={'Пароль'}
                type={'password'}
                placeholder={'Укажите ваш пароль'}
            />
            <InputItem
                value={data.repeatPassword}
                onChange={(e) =>
                    setData({ ...data, repeatPassword: e.target.value })
                }
                title={'Повторите пароль'}
                type={'password'}
                placeholder={'Укажите ваш пароль'}
            />
            <Button
                variant={'green'}
                hSize={'xl'}
                radius={'sm'}
                center
                disabled={data.password.length === 0 || data.email.length === 0}
            >
                Войти
            </Button>
        </form>
    );
};
