import clsx from 'clsx';
import { type ElementType } from 'react';

import cls from './Button.module.css';
import type { ButtonProps } from './types.ts';

export const Button = <T extends ElementType = 'button'>({
    hSize = 'md',
    radius = 'xs',
    variant = 'none',
    fontSize = 'none',
    padding = 'xs',
    font = 'medium',
    textColor = 'none',
    className,
    center,
    children,
    wFull,
    hoverNone,
    color,
    bg,
    as,
    ...others
}: ButtonProps<T>) => {
    const buttonClass = clsx(cls.button, [
        className,
        cls[hSize],
        cls[padding + '-padding'],
        cls[fontSize + '-font'],
        cls[radius + '-radius'],
        cls[variant],
        cls[font],
        {
            [cls.wFull]: wFull,
            [cls.center]: center,
            [cls.hoverNone]: hoverNone,
        },
    ]);

    const Component = as || 'button';
    return (
        <Component
            className={buttonClass}
            style={{ color, backgroundColor: bg }}
            {...others}
        >
            {children}
        </Component>
    );
};
