import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import './Title.css';

interface TitleProps {
    h?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    color?: string;
    style?: React.CSSProperties;
}

export const Title = ({
    h = 'h1',
    className,
    children,
    color,
    style,
}: PropsWithChildren<TitleProps>) => {
    const Component = h;

    return (
        <Component className={clsx(h, className)} style={{ color, ...style }}>
            {children}
        </Component>
    );
};
