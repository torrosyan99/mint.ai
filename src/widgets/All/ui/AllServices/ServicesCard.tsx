import type { ReactNode } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import PinSvg from '@icons/pin.svg?react';

import cls from '../global.module.css';
import {ButtonIcon} from "@/shared/ui/ButtonIcon/ButtonIcon.tsx";

interface ServicesCardProps {
    icon: ReactNode;
    title: string;
    text: string;
    unpinned?: boolean;
}

export const ServicesCard = ({ icon, title, text, unpinned }: ServicesCardProps) => {
    return (
        <Button
            className={cls.card}
            padding={'none'}
            hSize={'none'}
            hoverNone
            variant={'primary'}
        >
            {icon}
            <div className={cls.info}>
                <P font={'medium'} size={'lg'}>
                    {' '}
                    {title}
                </P>
                <P className={cls.cardText} size={'xs'}>
                    {text}
                </P>
            </div>
            {unpinned && <ButtonIcon size={'xs'} radius={'xs'} className={cls.pin}>
                <PinSvg width={16} height={16}  />
            </ButtonIcon> }
        </Button>
    );
};
