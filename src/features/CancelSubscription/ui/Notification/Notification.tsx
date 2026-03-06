import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import TokenSvg from '@icons/token-2.svg?react';
import TokensSvg from '@icons/tokens.svg?react';

import cls from './Notification.module.css';

interface NotificationProps {
    onClose: () => void;
    onShowForm: () => void;
}

export const Notification = ({ onShowForm, onClose }: NotificationProps) => {
    return (
        <div className={cls.notification}>
            <TokensSvg />
            <Title className={cls.title} h={'h5'}>
                Твои 400 токенов сгорят <br /> без подписки – сохрани их
            </Title>
            <P size={'lg-always'}>
                Токены сгорят после окончания оплаченного периода доступа.
                Оставайтесь с активной подпиской MintAI, чтобы получать токены и
                использовать их.
            </P>
            <Box className={cls.box} bg={'var(--color-6)'} padding={'none'}>
                <P>Через 7 дней – продление подписки и начисление на баланс:</P>
                <div className={cls.count}>
                    <TokenSvg />
                    1300
                </div>
                <P>А также случится продление на тариф Start+</P>
            </Box>
            <Buttons className={cls.buttons} justifyContent={'center'}>
                <Button
                    hSize={'xl'}
                    radius={'lg'}
                    padding={'lg'}
                    variant={'primary'}
                    onClick={onShowForm}
                >
                    Отменить подписку
                </Button>
                <Button
                    hSize={'xl'}
                    radius={'lg'}
                    padding={'lg'}
                    variant={'green'}
                    onClick={onClose}
                >
                    Сохранить подписку
                </Button>
            </Buttons>
        </div>
    );
};
