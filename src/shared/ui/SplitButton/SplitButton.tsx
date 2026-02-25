import clsx from 'clsx';
import {
    type ButtonHTMLAttributes,
    type PropsWithChildren,
    type ReactNode,
    useState,
} from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';

import DotsSvg from '@icons/dots.svg?react';

import cls from './SplitButton.module.css';

interface SplitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonValue: string;
    icon: ReactNode;
    rightIcon?: ReactNode;
}

export const SplitButton = ({
    buttonValue,
    children,
    icon,
    rightIcon,
    ...others
}: PropsWithChildren<SplitButtonProps>) => {
    const [isOpen, setIsOpen] = useState(false);

    const DropdownButton = (
        <span className={cls.dotsButton} onClick={(e) => e.stopPropagation()}>
            <DotsSvg />
        </span>
    );


    return (
        <Button
            className={clsx(cls.button, {
                [cls.active]: isOpen,
                [cls.rightIconHas]: rightIcon,
            })}
            font={'regular'}
            fontSize={'xs'}

            variant={'ghost'}
            hSize={'md'}
            {...others}
        >
            {icon}

            <span className={cls.buttonValue}>{buttonValue}</span>

            {rightIcon && !isOpen && (
                <span className={cls.rightIcon}>{rightIcon}</span>
            )}

            <Dropdown
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                sideOffset={3}
                align={'start'}
                Button={DropdownButton}
                list
            >
                {children}
            </Dropdown>
        </Button>
    );
};
