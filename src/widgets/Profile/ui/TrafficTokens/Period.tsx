import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import cls from './TrafficTokens.module.css';

interface PeriodProps {
    expired: boolean;
}

export const Period = ({
    expired,
    children,
}: PropsWithChildren<PeriodProps>) => {
    return (
        <div
            className={clsx(cls.period, {
                [cls.expired]: expired,
            })}
        >
            {`${expired ? 'Закончится' : 'Активен до'} ${children}`}
        </div>
    );
};
