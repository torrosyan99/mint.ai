import type { PropsWithChildren, ReactNode } from 'react';

import { Box } from '@/shared/ui/Box/Box.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import TokenSvg from '@icons/token-2.svg?react';

import cls from './SubscriptionTg.module.css';

interface SubscriptionItemProps {
    icon: ReactNode;
    count?: number;
}

export const SubscriptionItem = ({
    icon,
    count,
    children,
}: PropsWithChildren<SubscriptionItemProps>) => {
    return (
        <Box className={cls.item} bg={'var(--color-6)'} radius={'sm'}>
            {icon}
            <P font={'medium'} size={'lg-always'}>
                {children}
            </P>
            {count && (
                <div className={cls.count}>
                    <TokenSvg />
                    {count}
                </div>
            )}
        </Box>
    );
};
