import type { PropsWithChildren } from 'react';

import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './global.module.css';

interface WrapperProps {
    title: string;
}

export const Wrapper = ({
    title,
    children,
}: PropsWithChildren<WrapperProps>) => {
    return (
        <div className={cls.wrapper}>
            <Title h={'h6'}>{title}</Title>
            <div className={cls.list}>{children}</div>
        </div>
    );
};
