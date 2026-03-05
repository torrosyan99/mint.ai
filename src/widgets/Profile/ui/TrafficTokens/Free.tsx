import { Button } from '@/shared/ui/Button/Button.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import TokenSvg from '@icons/token-2.svg?react';

import { Box } from '../Box/Box.tsx';
import cls from './TrafficTokens.module.css';

export const Free = () => {
    return (
        <Box className={cls.freeBox}>
            <Title color={'var(--color-10)'} h={'h5'}>
                Free
            </Title>
            <div className={cls.count}>
                <TokenSvg />
                25
            </div>
            <Button
                className={cls.freeButton}
                variant={'green'}
                padding={'md'}
                center
            >
                Выбрать тариф
            </Button>
        </Box>
    );
};
