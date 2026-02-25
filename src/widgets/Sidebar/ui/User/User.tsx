import { motion } from 'framer-motion';

import type { SidebarComponentProps } from '@/widgets/Sidebar/types';

import avatar from '@/shared/assets/images/avatar.png';
import { motionCompactOptions } from '@/shared/helpers';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import ElementsSvg from '@icons/elements.svg?react';

import { Menu } from './Menu.tsx';
import cls from './User.module.css';

const imgVariants = {
    expanded: {
        width: 32,
        height: 32,
        x: 0,
        y: '-50%',
    },
    compact: {
        width: 30,
        height: 30,
        x: -7,
        y: '-50%',
    },
};

const buttonVariants = {
    expanded: {
        height: 48,
    },
    compact: {
        height: 39,
    },
};
export const User = ({ isCompact }: SidebarComponentProps) => {
    const Button = (
        <Box
            className={cls.button}
            as={motion.button}
            padding={'sm'}
            radius={'sm'}
            {...motionCompactOptions(buttonVariants, isCompact)}
        >
            <motion.img
                {...motionCompactOptions(imgVariants, isCompact)}
                className={cls.photo}
                src={avatar}
                alt={'userPhoto'}
            />
            <P className={cls.name} font={'medium'} size={'sm'}>
                Евгений
            </P>
            <ElementsSvg />
        </Box>
    );
    return <Menu DropdownButton={Button} />;
};
