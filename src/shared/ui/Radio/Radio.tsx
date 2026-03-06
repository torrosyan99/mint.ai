import clsx from 'clsx';

import cls from './Radio.module.css';

interface RadioProps {
    active: boolean;
    className?: string;
    size?: number;
}

export const Radio = ({ active, className, size = 20 }: RadioProps) => {
    return (
        <div
            className={clsx(cls.radio, className, {
                [cls.active]: active,
            })}
            style={{ width: size, height: size }}
        />
    );
};
