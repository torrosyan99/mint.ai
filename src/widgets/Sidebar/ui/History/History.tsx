import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { DeleteAllChats } from '@/features/DeleteAllChats';

import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';
import { motionHiddenOptions } from '@/shared/helpers';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import TrashBinSvg from '@icons/trash-bin.svg?react';

import type { SidebarComponentProps } from '../../types';
import cls from './History.module.css';
import { HistoryItems } from './HistoryItems.tsx';

export const History = ({ isCompact }: SidebarComponentProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <>
            <AnimatePresence initial={false}>
                {!isCompact && (
                    <motion.div
                        className={cls.history}
                        {...motionHiddenOptions(fadeOpacityVariants, isCompact)}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className={cls.top}>
                            <P
                                className={cls.title}
                                color={'var(--color-11)'}
                                size={'sm'}
                                font={'medium'}
                            >
                                История чата
                            </P>
                            <Tooltip
                                placement={'top'}
                                message={'Удалить историю'}
                            >
                                <ButtonIcon
                                    className={cls.deleteButton}
                                    size={'xs'}
                                    onClick={onOpen}
                                >
                                    <TrashBinSvg width={16} height={16} />
                                </ButtonIcon>
                            </Tooltip>
                        </div>
                        <Search
                            placeholder={'Поиск чата'}
                            variant={'secondary'}
                            hSize={'xs'}
                        />
                        <HistoryItems />
                    </motion.div>
                )}
            </AnimatePresence>
            <DeleteAllChats isOpen={isOpen} onClose={onClose} />
        </>
    );
};
