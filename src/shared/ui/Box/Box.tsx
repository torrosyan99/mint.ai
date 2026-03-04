import clsx from 'clsx';
import type { ComponentProps, PropsWithChildren } from 'react';
import type { ElementType } from 'react';

import cls from './Box.module.css';

type BoxProps<T extends ElementType> = {
    as?: T;
    className?: string;
    bg?: string;
    padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    radius?: 'xs' | 'sm' | 'md';
    shadow?: boolean;
} & ComponentProps<T>;

export const Box = <T extends ElementType = 'div'>({
    children,
    as,
    padding = 'lg',
    className,
    shadow = false,
    radius = 'xs',
    bg,
    ...others
}: PropsWithChildren<BoxProps<T>>) => {
    const Component = as || 'div';
    return (
        <Component
            className={clsx(cls.box, [
                className,
                cls[padding],
                cls[radius + '-radius'],
            ], {[cls.shadow]: shadow})}
            style={{ backgroundColor: bg }}
            {...others}
        >
            {children}
        </Component>
    );
};
