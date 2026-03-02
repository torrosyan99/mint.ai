import clsx from 'clsx';
import {type TextareaHTMLAttributes, useState} from 'react';

import cls from './Input.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    max?: number;
}


export const Textarea = ({ className, max, ...others }: TextareaProps) => {


    const [value, setValue] = useState('');
    return (
        <div className={clsx(cls.input, className, {
            [cls.hasMax]: max,
        })}>
            <textarea
              className={cls.textarea}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...others}
                maxLength={max}
            ></textarea>
            {max && (
                <div className={cls.textCount}>
                    {value.length} / {max}
                </div>
            )}
        </div>
    );
};
