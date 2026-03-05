import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import GmailSvg from '@icons/gmail.svg?react';
import TgSvg from '@icons/tg.svg?react';
import VkSvg from '@icons/vk.svg?react';
import YandexSvg from '@icons/yandex.svg?react';

import { Form } from './Form.tsx';
import cls from './Login.module.css';

export const Login = () => {
    return (
        <>
            <Title className={cls.title} h={'h6'} color={'var(--color-10)'}>
                Войдите, чтобы продолжить
            </Title>
            <Form />
            <div className={cls.or}> или войдите</div>
            <P className={cls.text}>через социальные сети </P>
            <div className={cls.socials}>
                <button className={cls.social}>
                    <GmailSvg />
                </button>
                <button className={cls.social}>
                    <YandexSvg />
                </button>
                <button className={cls.social}>
                    <TgSvg />
                </button>
                <button className={cls.social}>
                    <VkSvg />
                </button>
            </div>
        </>
    );
};
