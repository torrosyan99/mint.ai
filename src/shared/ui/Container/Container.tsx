import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import cls from './Container.module.css';

interface ContainerProps {
    className?: string;
}

export const Container = ({
    className,
    children,
}: PropsWithChildren<ContainerProps>) => {
    return <div className={clsx(cls.container, className)}>{children}</div>;
};
