import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import SuccessSvg from '@icons/success.svg?react';

import cls from './Payment.module.css';
import {Button} from "@/shared/ui/Button/Button.tsx";

export const Payment = () => {
    return (
        <div className={cls.payment}>
            <SuccessSvg />
            <Title h={'h5'} className={cls.title}>
                Платеж выполнен
            </Title>
            <P className={cls.text}>Теперь ты можешь пользоваться MintAI</P>
            <div className={cls.sum}>
                <P className={cls.value} font={'medium'}>
                    Сумма
                </P>
                <P className={cls.key} font={'semibold'} color={'dark'}>
                  199 ₽
                </P>
            </div>
            <div className={cls.date}>
                <P className={cls.value} font={'medium'}>
                  Дата
                </P>
                <P className={cls.key}  color={'dark'}>
                  06.02.2026
                </P>
            </div>
          <Button
            color={cls.button}
            variant={'green'}
            hSize={'xl'}
            wFull
            center
          >
            Оформить подписку
          </Button>
        </div>
    );
};
