import { P } from '@/shared/ui/P/P.tsx';

import TokenSvg from '@icons/token-2.svg?react';

import cls from './Transaction.module.css';

export interface TransactionItemProps {
    name: string;
    count?: number;
    date: string;
    price?: string;
    period?: string;
    type?: string;
}

export const TransactionItem = ({
    name,
    count,
    price,
    date,
    period,
    type,
}: TransactionItemProps) => {
    return (
        <div className={cls.item}>
            <div className={cls.start}>
                <P font={'medium'} className={cls.itemName}>
                    {name}
                </P>
                <P className={cls.type} color={'var(--color-13)'} size={'xs'}>
                    {type}
                </P>
            </div>
            {count && (
                <div className={cls.count}>
                    <TokenSvg width={20} height={20} />
                    {count}
                </div>
            )}
            {period && (
                <P font={'medium'} className={cls.period}>
                    {period}
                </P>
            )}
            <div className={cls.end}>
                {price && <P size={'xs'}>{price}</P>}
                <P className={cls.date} color={'var(--color-13)'} size={'xs'}>
                    {date}
                </P>
            </div>
        </div>
    );
};
