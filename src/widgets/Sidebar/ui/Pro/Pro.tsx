import clsx from 'clsx';
import { motion } from 'framer-motion';

import { motionCompactOptions, motionHiddenOptions } from '@/shared/helpers';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { MotionP } from '@/shared/ui/P/P.tsx';

import { getIsCompactClass } from '../../helpers/getIsCompactClass';
import type { SidebarComponentProps } from '../../types';
import cls from './Pro.module.css';

const boxVariants = {
    compact: {
        background: 'none',
        boxShadow: 'none',
        padding: 0,
    },
    expanded: {
        background: 'var(--color-2)',
        boxShadow: '0 5px 20px 0 rgba(41, 50, 43, 0.10)',
        padding: 16,
    },
};

const textVariants = {
    visible: {
        width: 'auto',
        opacity: 1,
    },
    hidden: {
        width: 0,
        opacity: 0,
    },
};

export const Pro = ({ isCompact }: SidebarComponentProps) => {
    const isCompactClass = getIsCompactClass(isCompact, cls);
    const motionTextVariants = motionHiddenOptions(textVariants, isCompact);
    return (
        <Box
            as={motion.div}
            className={clsx(cls.box, isCompactClass)}
            {...motionCompactOptions(boxVariants, isCompact)}
        >
            <MotionP {...motionTextVariants} font={'medium'}>
                PRO тариф
            </MotionP>
            <MotionP {...motionTextVariants} size={'xs'} color={'secondary'}>
                Попробуй Premium тариф. <br /> Первый месяц бесплатно.
            </MotionP>
            <Button
                className={clsx(cls.button, isCompactClass)}
                variant={'green'}
                hSize={'lgCompact'}
                fontSize={'xs'}
                wFull
            >
                <motion.span {...motionTextVariants}>Купить</motion.span>
                Pro <motion.span {...motionTextVariants}>тариф</motion.span>
            </Button>
        </Box>
    );
};
