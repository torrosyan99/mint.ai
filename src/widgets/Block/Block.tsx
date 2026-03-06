import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import cls from './Block.module.css';

interface BlockProps {
    className?: string;
}

export const Block = ({
    children,
    className,
}: PropsWithChildren<BlockProps>) => {
    return <div className={clsx(cls.block, className)}>{children}</div>;
};
