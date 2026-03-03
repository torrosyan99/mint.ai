import { useState } from 'react';
import 'swiper/css';

import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Switcher } from '@/shared/ui/Switcher/Switcher.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import CloseSvg from '@icons/close.svg?react';

import { Month } from './Month.tsx';
import cls from './Tarrifs.module.css';

export const Tarrifs = () => {
    const [show, setShow] = useState(true);

    if (!show) return;
    return (
        <div className={cls.tarrifs}>
            <Title className={cls.title} h={'h2'}>
                Выберите тариф
            </Title>
            <Switcher
                params={[
                    { Component: <Month />, buttonTitle: 'Месяц' },
                    {
                        Component: <Month />,
                        buttonTitle: (
                            <>
                                Год <span>2 месяца бесплатно</span>
                            </>
                        ),
                    },
                ]}
            />
            <P className={cls.bottomText} font={'medium'} size={'sm'}>
                Токены могут купить только пользователи с подпиской.
            </P>

            <ButtonIcon
                size={'sm-compact'}
                radius={'sm'}
                className={cls.close}
                onClick={() => setShow(false)}
            >
                <CloseSvg />
            </ButtonIcon>
        </div>
    );
};
