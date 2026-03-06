import type { ReactNode } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import TokenSvg from '@icons/token-2.svg?react';

import cls from '../global.module.css';

interface ServicesCardProps {
    icon: ReactNode;
    title: string;
    text: string;
    count: number;
}

export const AiCard = ({ icon, title, text, count }: ServicesCardProps) => {
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
            <div className={cls.count}>
                <TokenSvg width={20} height={20} />
                {count}
            </div>
        </Button>
    );
};
