import { P } from '@/shared/ui/P/P.tsx';

import cls from './Transaction.module.css';
import {TransactionItem} from "@/widgets/Profile/ui/Transaction/TransactionItem.tsx";

export const Spending = () => {
    return (
        <div className={cls.spending}>
            <div className={cls.day}>
                <P size={'sm'} color={'secondary'}>
                    Сегодня
                </P>
            </div>
          <div className={cls.list}>
            <TransactionItem name={'ChatGPT 5.1'} count={-25} />
          </div>
        </div>
    );
};
