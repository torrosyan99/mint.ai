import { TransactionItem } from '@/widgets/Profile/ui/Transaction/TransactionItem.tsx';

import { P } from '@/shared/ui/P/P.tsx';

import cls from './Transaction.module.css';

export const Spending = () => {
    return (
        <div className={cls.spending}>
            <div className={cls.day}>
                <P
                    className={cls.dayValue}
                    size={'xs'}
                    color={'var(--color-13)'}
                >
                    Сегодня{' '}
                </P>
                <div className={cls.list}>
                    <TransactionItem
                        name={'ChatGPT 5.1'}
                        count={-25}
                        date={'04.02.2026, 17:52:45'}
                    />
                </div>
            </div>
        </div>
    );
};
