import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

import SearchSvg from '@icons/search.svg?react';

import cls from './Search.module.css';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary';
    className?: string;
    hSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    padding?: 'xs' | 'sm' | 'md';
}

export const Search = ({
    variant = 'primary',
    className,
    hSize = 'sm',
    padding = 'xs',
    ...others
}: SearchProps) => {
    return (
        <div
            className={clsx(cls.search, [
                className,
                cls[variant],
                cls[padding + '-padding'],
            ])}
        >
            <SearchSvg className={cls.icon} />
            <input className={clsx(cls.input, [cls[hSize]])} {...others} />
        </div>
    );
};
