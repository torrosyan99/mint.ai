import { useState } from 'react';

import { EditUser } from '@/features/EditUser';

import avatar from '@/shared/assets/images/avatar.png';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import PenSvg from '@icons/pen.svg?react';

import { Box } from '../Box/Box.tsx';
import cls from './Header.module.css';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <div>
            <P
                font={'medium'}
                size={'lg-always'}
                color={'var(--color-10)'}
            >
                Мой аккаунт
            </P>

            <Box className={cls.box}>
                <img className={cls.avatar} src={avatar} alt={'avatar'} />
                <div>
                    <P font={'medium'} color={'dark'} size={'lg'}>
                        Yura Streltsov
                    </P>
                    <P className={cls.email} font={'medium'} size={'sm'}>
                        seo.streltsov@yandex.ru
                    </P>
                </div>
                <Button
                    onClick={onOpen}
                    className={cls.button}
                    variant={'none'}
                    fontSize={'xs'}
                    padding={'none'}
                >
                    <PenSvg />
                    <span>Редактировать</span>
                </Button>
            </Box>
            <EditUser isOpen={isOpen} onClose={onClose} />
        </div>
    );
};
