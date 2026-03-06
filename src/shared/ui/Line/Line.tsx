import clsx from 'clsx';

import cls from './Line.module.css';

interface LineProps {
    className?: string;
}

export const Line = ({ className }: LineProps) => {
    return <div className={clsx(cls.line, className)} />;
};
