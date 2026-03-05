import clsx from 'clsx';
import {
    type ComponentPropsWithRef,
    type ElementType,
    type PropsWithChildren,
} from 'react';

import cls from './ButtonIcon.module.css';

interface Props {
    size?:
        | 'none'
        | 'xs'
        | 'sm'
        | 'smCompact'
        | 'md'
        | 'lg'
        | 'lgCompact'
        | 'xl'
        | 'x2l';
    radius?: 'xs' | 'sm' | 'md' | 'full';
    bg?: string;
    variant?: 'none' | 'ghost';
}

type PolymorphicProps<T extends ElementType, P> = PropsWithChildren<
    P & { as?: T }
> &
    Omit<ComponentPropsWithRef<T>, keyof P | 'as' | 'children'>;

export type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<
    T,
    Props
>;

export const ButtonIcon = <T extends ElementType = 'button'>({
    size = 'md',
    radius = 'xs',
    variant = 'none',
    bg,
    className,
    children,
    as,
    active,
    ...others
}: ButtonProps<T>) => {
    const buttonClass = clsx(cls.button, [
        className,
        cls[size],
        cls[radius + '-radius'],
        cls[variant],
    ]);

    const Component = as || 'button';
    return (
        <Component className={buttonClass} style={{ background: bg }} {...others}>
            {children}
        </Component>
    );
};
