import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { Box as BaseBox } from '@/shared/ui/Box/Box';

import cls from './Box.module.css';

interface BoxProps {
    className?: string;
}

export const Box = ({ children, className }: PropsWithChildren<BoxProps>) => {
    return (
        <BaseBox
            className={clsx(cls.box, className)}
            radius={'sm'}
            bg={'var(--color-23)'}
        >
            {children}
        </BaseBox>
    );
};
