import { useState } from 'react';

import { Box } from '@/widgets/Profile/ui/Box/Box.tsx';

import { PromocodeForm } from '@/features/PromocodeForm';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import cls from './Promocode.module.css';

export const Promocode = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <div className={cls.promocod}>
            <P font={'medium'} size={'lg'} color={'dark'}>
                Промокод
            </P>
            <Box className={cls.box}>
                <P className={cls.text}>
                    Получи бонусные токены или скидку на оформление подписки
                </P>
                <Button
                    padding={'md'}
                    fontSize={'xs'}
                    bg={'var(--color-24)'}
                    className={cls.button}
                    onClick={onOpen}
                    center
                >
                    Ввести промокод
                </Button>
            </Box>
            <PromocodeForm isOpen={isOpen} onClose={onClose} />
        </div>
    );
};
