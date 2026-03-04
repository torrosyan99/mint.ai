import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import cls from './Buttons.module.css';

interface ButtonsProps {
    marginTop?: number;
    justifyContent?: 'start' | 'center' | 'end';
}

export const Buttons = ({
    children,
    justifyContent = 'start',
    marginTop,
}: PropsWithChildren<ButtonsProps>) => {
    return (
        <div
            className={clsx(cls.buttons, cls[justifyContent])}
            style={{ marginTop }}
        >
            {children}
        </div>
    );
};
