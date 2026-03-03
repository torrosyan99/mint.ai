import type { PropsWithChildren } from 'react';

import './Title.css';
import clsx from "clsx";

interface TitleProps {
    h?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export const Title = ({
    h = 'h1',
    className,
    children,
}: PropsWithChildren<TitleProps>) => {
    const Component = h;

    return <Component className={clsx(h ,className)}>{children}</Component>;
};
