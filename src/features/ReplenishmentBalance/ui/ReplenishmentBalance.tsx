import { useState } from 'react';

import { ReplenishmentItem } from '@/features/ReplenishmentBalance/ui/ReplenishmentItem.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import { balanceConfig } from '../config/balanceConfig.tsx';
import cls from './ReplenishmentBalance.module.css';

interface ReplenishmentBalance {
    isOpen: boolean;
    onClose: () => void;
}

export const ReplenishmentBalance = ({
    isOpen,
    onClose,
}: ReplenishmentBalance) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Modal
          className={cls.modal}
            isOpen={isOpen}
            onClose={onClose}
            maxWidth={500}
            title={{
                value: 'Пополнить баланс токенов',
                h: 'h5',
                subTitle: 'Выберите подходящий пакет токенов',
            }}
        >
            <div className={cls.items}>
                {balanceConfig.map((item, i) => (
                    <ReplenishmentItem
                        {...item}
                        active={activeIndex === i}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
            <Button hSize={'xl'} radius={'sm'} variant={'green'} wFull center>
                Купить за {balanceConfig[activeIndex].price} ₽
            </Button>
            <P
                className={cls.text}
                size={'sm'}
                font={'medium'}
                color={'#646567'}
            >
                Токены могут купить только пользователи с подпиской.
            </P>
        </Modal>
    );
};
