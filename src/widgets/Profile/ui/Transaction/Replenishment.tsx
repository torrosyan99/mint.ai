import cls from './Transaction.module.css';

export const Replenishment = () => {
    return (
        <div className={cls.replenishment}>
            <div className={cls.noTransaction}>Нет транзакций</div>
        </div>
    );
};
