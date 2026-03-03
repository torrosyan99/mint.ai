import { Box } from '@/widgets/Profile/ui/Box/Box.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import cls from './Promocode.module.css';
import {useState} from "react";
import {PromocodeForm} from "@/features/PromocodeForm";

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
                    padding={'none'}
                    fontSize={'xs'}
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
