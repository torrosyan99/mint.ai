import clsx from 'clsx';
import type { ComponentProps, PropsWithChildren } from 'react';
import type { ElementType } from 'react';

import cls from './Box.module.css';

type BoxProps<T extends ElementType> = {
    as?: T;
    className?: string;
    variant?: 'primary' | 'secondary';
    padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    radius?: 'xs' | 'sm' | 'md';
} & ComponentProps<T>;

export const Box = <T extends ElementType = 'div'>({
    children,
    as,
    variant = 'primary',
    padding = 'lg',
    className,
    radius = 'xs',
    ...others
}: PropsWithChildren<BoxProps<T>>) => {
    const Component = as || 'div';
    return (
        <Component
            className={clsx(cls.box, [
                className,
                cls[variant],
                cls[padding],
                cls[radius + '-radius'],
            ])}
            {...others}
        >
            {children}
        </Component>
    );
};
