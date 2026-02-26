import type { ReactNode } from 'react';

import CountSvg from '@/shared/assets/icons/count-icon.svg?react';
import PinCancelSvg from '@/shared/assets/icons/pin-cancel.svg?react';
import PinSvg from '@/shared/assets/icons/pin.svg?react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import cls from './AiSelect.module.css';

interface AiSelectButtonProps {
    icon: ReactNode;
    name: string;
    text: string;
    count: number;
    unpinned?: boolean;
}

export const AiSelectButton = ({
    icon,
    name,
    text,
    count,
    unpinned,
}: AiSelectButtonProps) => {
    return (
        <Button
            className={cls.button}
            hSize={'none'}
            padding={'sm'}
            radius={'sm'}
            wFull
            as={'div'}
        >
            {icon}
            <div className={cls.info}>
                <P className={cls.name} font={'medium'}>{name}</P>
                <P  size="xs" color={'tertiary'}>
                    {text}
                </P>
            </div>
            <div className={cls.count}>
                <CountSvg /> {count}
            </div>
            <Tooltip
                message={unpinned ? 'Открепить' : 'Закрепить'}
                placement={'top'}
                offsetSize={3.8}
            >
                <ButtonIcon
                    size={'sm-compact'}
                    variant={'none'}
                    radius={'sm'}
                    className={cls.pin}
                >
                    {unpinned ? (
                        <PinCancelSvg width={16} height={16} />
                    ) : (
                        <PinSvg width={16} height={16} />
                    )}
                </ButtonIcon>
            </Tooltip>
        </Button>
    );
};
