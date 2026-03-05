import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { SplitButton } from '@/shared/ui/SplitButton/SplitButton.tsx';

import PenSvg from '@icons/pen.svg?react';
import PinCancelSvg from '@icons/pin-cancel.svg?react';
import PinSvg from '@icons/pin.svg?react';
import TrashBinSvg from '@icons/trash-bin.svg?react';

import cls from './HistoryButton.module.css';

interface HistoryButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    unpinned?: boolean;
    buttonValue: string;
}

const buttonProps = {
    as: 'button',
    variant: 'ghost',
    fontSize: 'xs',
    wFull: true,
    font: 'regular',
} as const;
export const HistoryButton = ({
    icon,
    unpinned,
    buttonValue,
    ...others
}: HistoryButton) => {
    return (
        <SplitButton
            icon={icon}
            buttonValue={buttonValue}
            rightIcon={
                unpinned && (
                    <PinSvg className={cls.pin} width={14} height={14} />
                )
            }
            {...others}
        >
            <Button className={cls.innerButton} {...buttonProps}>
                {unpinned ? (
                    <>
                        <PinCancelSvg />
                        Открепить чат
                    </>
                ) : (
                    <>
                        <PinSvg />
                        Закрепить чат
                    </>
                )}
            </Button>
            <Button {...buttonProps}>
                <PenSvg />
                Переименовать
            </Button>
            <Button
                className={cls.delete}
                color={'var(--cancel-color)'}
                {...buttonProps}
            >
                <TrashBinSvg />
                Удалить чат
            </Button>
        </SplitButton>
    );
};
