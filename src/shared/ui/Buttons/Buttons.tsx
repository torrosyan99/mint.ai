import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import cls from './Buttons.module.css';

interface ButtonsProps {
    marginTop?: number;
    justifyContent?: 'start' | 'center' | 'end';
    className?: string;
}

export const Buttons = ({
    children,
    justifyContent = 'start',
  className,
    marginTop,
}: PropsWithChildren<ButtonsProps>) => {
    return (
        <div
            className={clsx(cls.buttons, className, cls[justifyContent])}
            style={{ marginTop }}
        >
            {children}
        </div>
    );
};
