import clsx from 'clsx';
import {
    type ComponentPropsWithRef,
    type ElementType,
    type PropsWithChildren,
} from 'react';

import cls from './ButtonIcon.module.css';

interface Props {
    size?: 'none' | 'xs' | 'sm' | 'sm-compact' | 'md' | 'lg' | 'lgCompact' | 'xl' | 'x2l';
    radius?: 'xs' | 'sm' | 'md' | 'full';
    variant?: 'none' | 'primary' | 'secondary' | 'ghost';
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
    variant = 'primary',
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
        <Component className={buttonClass} {...others}>
            {children}
        </Component>
    );
};
