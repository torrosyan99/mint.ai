import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { fadeOpacityVariants } from '@/shared/configs/motionConfig/motionConfig.ts';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';

import CloseSvg from '@icons/close.svg?react';

import cls from './Lightbox.module.css';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
}

const previewVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export function Lightbox({
    isOpen,
    onClose,
    children,
}: PropsWithChildren<LightboxProps>) {
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.body.classList.add('body-overflow');

        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.classList.remove('body-overflow');
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
                    <ButtonIcon
                        size={'smCompact'}
                        className={cls.close}
                        onClick={onClose}
                        radius={'sm'}
                        bg={'var(--color-6)'}
                    >
                        <CloseSvg width={16} height={16} />
                    </ButtonIcon>
                    <motion.div
                      className={cls.content}
                        role="dialog"
                        aria-modal="true"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={previewVariants}
                        transition={{
                            type: 'spring',
                            stiffness: 520,
                            damping: 38,
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
