import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import CloseSvg from '@icons/close.svg?react';

import cls from './Modal.module.css';

interface ModalProps  {
    isOpen: boolean;
    onClose: () => void;
    title?: {
        value: string;
        h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    };
    className?: string;
    bodyOverflow?: boolean;
    closeClass?: string;
    padding?: 'none' | 'xs' | 'sm' | 'md';
    maxWidth?: number;
    closeCircleFull?: boolean;
};

const modalVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    className,
    padding = 'md',
    closeClass,
    maxWidth,
    closeCircleFull,
}: PropsWithChildren<ModalProps>) {
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };


        document.body.classList.add('body-overflow-modal');

        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.classList.remove('body-overflow-modal');
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeOpacityVariants}
                    transition={{ duration: 0.18 }}
                    onMouseDown={onClose}
                    className={cls.overlay}
                    aria-hidden={!isOpen}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        style={{ maxWidth: maxWidth || '100%' }}
                        variants={modalVariants}
                        transition={{
                            type: 'spring',
                            stiffness: 520,
                            damping: 38,
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        className={clsx(
                            cls.modal,
                            className,
                            title ? [cls.hasTitle] : [cls[padding]],
                        )}
                    >
                        <ButtonIcon
                            size={closeCircleFull ? 'xs' : 'smCompact'}
                            radius={closeCircleFull ? 'full' : 'sm'}
                            bg={'--color-2'}
                            className={clsx(cls.close, closeClass)}
                            onClick={onClose}
                        >
                            <CloseSvg width={16} height={16} />
                        </ButtonIcon>
                        {title && (
                            <Title className={cls.title} h={title.h}>
                                {title.value}
                            </Title>
                        )}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
