import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';

import CloseSvg from '@icons/close-2.svg?react';

import cls from './Modal.module.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    className?: string;
    bodyOverflow?: boolean;
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
  bodyOverflow=true,
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
        if (!isOpen || !bodyOverflow) return;
        document.body.classList.add('body-overflow');
        return () => {
            document.body.classList.remove('body-overflow');
        };
    }, [isOpen]);

    if (typeof document === 'undefined') return null;

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
                        aria-label={title ?? 'Modal'}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={modalVariants}
                        transition={{
                            type: 'spring',
                            stiffness: 520,
                            damping: 38,
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        className={clsx(cls.modal, className)}
                    >
                        <button className={cls.close} onClick={onClose}>
                            <CloseSvg />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
