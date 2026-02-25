import type {
    ComponentPropsWithRef,
    ElementType,
    PropsWithChildren,
} from 'react';

type ButtonHeightSize =
    | 'none'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'lgCompact'
    | 'xl'
    | 'x2l';
type ButtonRadius = 'xs' | 'sm' | 'md' | 'lg' | 'pill';
type ButtonFontSize = 'xs' | 'sm' | 'md';
type ButtonPadding = 'none' | 'xs' | 'sm';
type ButtonVariants = 'none' |'primary' | 'secondary' |'ghost' | 'green' ;
type ButtonColor = 'none' | 'cancel' | 'success';
type ButtonFont = 'regular' | 'medium';

type Props = {
    hSize?: ButtonHeightSize;
    radius?: ButtonRadius;
    variant?: ButtonVariants;
    fontSize?: ButtonFontSize;
    padding?: ButtonPadding;
    textColor?: ButtonColor;
    font?: ButtonFont;
    className?: string;
    center?: boolean;
    wFull?: boolean;
    hoverNone?: boolean;
};

type PolymorphicProps<T extends ElementType, P> = PropsWithChildren<
    P & { as?: T }
> &
    Omit<ComponentPropsWithRef<T>, keyof P | 'as' | 'children'>;

export type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<
    T,
    Props
>;
