import { P } from '@/shared/ui/P/P.tsx';

import cls from './Transaction.module.css';
import TokenSvg from "@icons/token-2.svg?react"
interface TransactionItemProps {
    name: string;
    count: number;
}

export const TransactionItem = ({ name, count }: TransactionItemProps) => {
    return (
        <div className={cls.item}>
            <P font={'medium'} className={cls.itemName}>{name}</P>
          <div className={cls.count}>
            <TokenSvg width={20} height={20} />
            {count}
          </div>
          <P className={cls.date} color={'secondary'} size={'xs'}>
            04.02.2026, 17:52:45
          </P>
        </div>
    );
};
