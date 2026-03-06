import { Button } from '@/shared/ui/Button/Button.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import TokenSvg from '@icons/token-2.svg?react';

import { AboutTarrifModal } from '../AboutPro/AboutTarrifModal.tsx';
import { Box } from '../Box/Box.tsx';
import { Period } from './Period.tsx';
import cls from './TrafficTokens.module.css';

interface WithSubsProps {
    tarrif: 'Pro' | 'Ultima';
    expired: boolean;
}

export const WithSubs = ({ tarrif, expired }: WithSubsProps) => {
    return (
        <Box className={cls.withSubsBox}>
            <div className={cls.wrapper}>
                <div className={cls.info}>
                    <Title h={'h5'} color={'var(--color-10)'}>
                        {tarrif}
                    </Title>
                    <Period expired={expired}>15.02.2026</Period>
                </div>
                {expired ? (
                    <Button
                        className={cls.button}
                        variant={'green'}
                        center
                        padding={'md'}
                        fontSize={'xs'}
                    >
                        Восстановить подписку
                    </Button>
                ) : (
                    <AboutTarrifModal expired={expired} />
                )}
            </div>
            <div className={cls.line} />
            <div className={cls.wrapper}>
                <div className={cls.count}>
                    <TokenSvg />
                    400
                </div>
                <Button
                    className={cls.countButton}
                    center
                    padding={'md'}
                    fontSize={'xs'}
                >
                    Пополнить баланс
                </Button>
            </div>
        </Box>
    );
};
