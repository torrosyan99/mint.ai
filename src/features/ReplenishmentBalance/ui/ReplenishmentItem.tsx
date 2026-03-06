import clsx from 'clsx';
import type { ReactNode } from 'react';

import { Box } from '@/shared/ui/Box/Box.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Radio } from '@/shared/ui/Radio/Radio.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './ReplenishmentBalance.module.css';

interface ReplenishmentItemProps {
    icon: ReactNode;
    active: boolean;
    tokens: number;
    price: number;
    oldPrice?: number;
    onClick: () => void;
}

export const ReplenishmentItem = ({
    icon,
    active,
    tokens,
    price,
    oldPrice,
    onClick,
}: ReplenishmentItemProps) => {
    return (
        <Box
            className={clsx(cls.item, {
                [cls.active]: active,
            })}
            radius={'lg'}
            padding={'none'}
            onClick={onClick}
        >
            <Box className={cls.box} radius={'lg'}>
                {icon}
            </Box>
            <div className={cls.info}>
                <Title
                    className={cls.tokens}
                    h={'h4'}
                    color={'var(--color-10)'}
                >
                    {tokens} <span>токенов</span>
                </Title>
                <div className={cls.aboutPrice}>
                    <P size={'lg'} color={'var(--color-13)'} font={'medium'}>
                        за {price} ₽
                    </P>
                    {oldPrice && (
                        <>
                            <P
                                className={cls.oldPrice}
                                size={'sm'}
                                color={'#88898C)'}
                                font={'medium'}
                            >
                                {oldPrice} ₽
                            </P>
                            <div className={cls.salary}>-13%</div>
                        </>
                    )}
                </div>
            </div>
            <Radio size={20} active={active} className={cls.radio} />
        </Box>
    );
};
