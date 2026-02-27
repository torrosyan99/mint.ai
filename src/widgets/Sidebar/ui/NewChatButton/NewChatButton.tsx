import { motion } from 'framer-motion';

import { motionCompactOptions, motionHiddenOptions } from '@/shared/helpers';

import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';

import AddSvg from '@icons/add.svg?react';
import MessagesSvg from '@icons/messages.svg?react';

import type { SidebarComponentProps } from '../../types/';
import cls from './NewChatButton.module.css';

const iconVariants = {
    expanded: { x: 8, y: '-50%' },
    compact: { x: 9, y: '-50%' },
};

export const NewChatButton = ({ isCompact }: SidebarComponentProps) => {
    return (
        <Button className={cls.button} variant={'primary'} fontSize={'xs'} hSize={'sm'} wFull>
            <motion.span
                className={cls.icon}
                {...motionCompactOptions(iconVariants, isCompact)}
            >
                <MessagesSvg />
            </motion.span>
            <motion.span
                className={cls.value}
                {...motionHiddenOptions(fadeOpacityVariants, isCompact)}
            >
                Новый чат
            </motion.span>
            <AddSvg className={cls.add} />
        </Button>
    );
};
