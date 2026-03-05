import { type SyntheticEvent, useState } from 'react';

import { InputItem } from '@/features/LogReg/ui/LogReg/InputItem.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './Registration.module.css';

interface RegistrationProps {
    onShow: () => void;
}

export const Registration = ({ onShow }: RegistrationProps) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    });
    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        onShow();
    };
    return (
        <>
            <Title className={cls.title} h={'h6'} color={'var(--color-10)'}>
                Зарегистрируйтесь
            </Title>
            <form className={cls.form} onSubmit={onSubmit}>
                <InputItem
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                    title={'E-mail'}
                    placeholder={'Укажите вашу почту'}
                />
                <InputItem
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
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
                    center
                    disabled={
                        data.password.length === 0 ||
                        data.email.length === 0 ||
                        data.repeatPassword.length === 0
                    }
                >
                    Войти
                </Button>
            </form>
        </>
    );
};
