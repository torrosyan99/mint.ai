import { TransactionItem } from '@/widgets/Profile/ui/Transaction/TransactionItem.tsx';

import { P } from '@/shared/ui/P/P.tsx';

import cls from './Transaction.module.css';

export const Replenishment = ({ empty }: { empty?: boolean }) => {
    return (
        <div className={cls.replenishment}>
            {empty ? (
                <div className={cls.noTransaction}>Нет транзакций</div>
            ) : (
                <>
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
                                name={'Тариф «PRO»'}
                                type={'Подписка'}
                                period={'1 месяц'}
                                price={'699 ₽'}
                                date={'04.02.2026, 17:52:45'}
                            />
                        </div>
                    </div>
                    <div className={cls.line} />
                    <div className={cls.day}>
                        <P
                            className={cls.dayValue}
                            size={'xs'}
                            color={'var(--color-13)'}
                        >
                            6 февраля 2026 г.
                        </P>
                        <div className={cls.list}>
                            <TransactionItem
                                name={'Бонус за регистрацию'}
                                count={50}
                                date={'04.02.2026, 17:52:45'}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
