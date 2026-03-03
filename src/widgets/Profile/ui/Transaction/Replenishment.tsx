import { P } from '@/shared/ui/P/P.tsx';

import cls from './Transaction.module.css';
import {TransactionItem} from "@/widgets/Profile/ui/Transaction/TransactionItem.tsx";

export const Replenishment = () => {
  return (
    <div className={cls.replenishment}>
      <div className={cls.day}>
        <P size={'sm'} color={'secondary'}>
          Сегодня
        </P>
      </div>
      <div className={cls.list}>
        <TransactionItem name={'Бонус за регистрацию'} count={-25} />
      </div>
    </div>
  );
};
