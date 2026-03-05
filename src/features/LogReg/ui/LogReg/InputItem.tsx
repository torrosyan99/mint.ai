import type { InputHTMLAttributes, ReactNode } from 'react';

import { Input } from '@/shared/ui/Input/Input.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import cls from './LogReg.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    right?: ReactNode;
}

export const InputItem = ({ title, right, ...others }: InputProps) => {
    return (
        <div>
            <div className={cls.top}>
                <P className={cls.itemTitle} font={'medium'}>
                    {title}
                </P>
                {right}
            </div>
            <Input {...others} />
        </div>
    );
};
