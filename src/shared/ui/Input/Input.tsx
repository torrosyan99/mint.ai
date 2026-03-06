import clsx from 'clsx';
import { type InputHTMLAttributes, useState } from 'react';

import GlasSvg from '@icons/glas.svg?react';

import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = ({ className, type, ...others }: InputProps) => {
    const [buttonType, setButtonType] = useState<string>(type || 'text');
    const onClick = () => setButtonType(type === 'text' ? 'password' : 'text');
    if (type === 'password') {
        return (
            <div className={cls.wrapper}>
                <input
                    className={clsx(cls.input, className)}
                    type={buttonType}
                    {...others}
                />
                <button className={cls.button} onClick={onClick} type="button">
                    <GlasSvg />
                </button>
            </div>
        );
    }
    return <input className={clsx(cls.input, className)} {...others} />;
};
