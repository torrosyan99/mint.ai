import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import DangerCircleSvg from '@icons/danger-circle.svg?react';

import cls from './Answer.module.css';

export const NoSubscription = () => {
    return (
        <div className={cls.noSubscription}>
            <DangerCircleSvg />
            <div className={cls.noSubscriptionMessage}>
                <P color={'var(--color-5)'} font={'semibold'}>
                    Для продолжения необходима подписка
                </P>
                <P color={'var(--color-13)'} size={'sm'}>
                    Выбранная модель или помощник доступны только по подписке
                </P>
            </div>
            <Button
                className={cls.errorButton}
                variant={'green'}
                hSize={'lgCompact'}
                padding={'sm'}
                fontSize={'xs'}
                radius={'sm'}
            >
                Оформить
            </Button>
        </div>
    );
};
