import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { SplitButton } from '@/shared/ui/SplitButton/SplitButton.tsx';

import PenSvg from '@icons/pen.svg?react';
import PinCancelSvg from '@icons/pin-cancel.svg?react';
import PinSSvg from '@icons/pin-s.svg?react';
import PinSvg from '@icons/pin.svg?react';
import TrashBinSvg from '@icons/trash-bin.svg?react';

interface HistoryButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    unpinned?: boolean;
    buttonValue:string
}

export const HistoryButton = ({ icon, unpinned,buttonValue, ...others }: HistoryButton) => {
    return (
        <SplitButton
            icon={icon}
            buttonValue={buttonValue}
            rightIcon={unpinned && <PinSSvg />}
            {...others}
        >
            <Button as={'button'} variant={'ghost'} fontSize={'xs'} wFull>
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
            <Button as={'button'} variant={'ghost'} fontSize={'xs'} wFull>
                <PenSvg />
                Переименовать
            </Button>
            <Button
                as={'button'}
                variant={'ghost'}
                fontSize={'xs'}
                textColor={'cancel'}
                wFull
            >
                <TrashBinSvg />
                Удалить чат
            </Button>
        </SplitButton>
    );
};
