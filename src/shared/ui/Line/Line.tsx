import cls from './Line.module.css'
import clsx from 'clsx';

interface LineProps {
    className?:string
}

export const Line = ({className}:LineProps) => {
    return <div className={clsx(cls.line, className)} />;
};
