import type { ButtonHTMLAttributes } from 'react';

import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import AddSvg from '@icons/add.svg?react';

import cls from './ProjectMemory.module.css';

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const AddButton = ({ value, ...others }: AddButtonProps) => {
    return (
        <div className={cls.addButton}>
            <P font={'medium'} color={'var(--color-39)'}>
                {value}
            </P>
            <ButtonIcon
                className={cls.buttonIcon}
                radius={'sm'}
                size={'smCompact'}
                {...others}
            >
                <AddSvg />
            </ButtonIcon>
        </div>
    );
};
