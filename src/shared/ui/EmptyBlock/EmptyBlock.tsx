import clsx from 'clsx';
import type { PropsWithChildren, ReactNode } from 'react';

import { P } from '@/shared/ui/P/P.tsx';

import cls from './EmptyBlock.module.css';

interface EmptyBlock {
    className?: string;
    icon?: ReactNode;
    title: string;
    text: string;
}

export const EmptyBlock = ({
    className,
    icon,
    title,
    text,
    children,
}: PropsWithChildren<EmptyBlock>) => {
    return (
        <div className={clsx(cls.block, className)}>
            {icon}
            <div>
                <P size={'lg'} font={'semibold'}>
                    {title}
                </P>
                <P className={cls.text}>{text}</P>
            </div>
            {children}
        </div>
    );
};
