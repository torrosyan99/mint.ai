import clsx from 'clsx';
import { useState } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import { Code } from '../Code/Code.tsx';
import { Content } from './Content.tsx';
import cls from './LogReg.module.css';

interface LogRegProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LogReg = ({ isOpen, onClose }: LogRegProps) => {
    const [showCode, setShowCode] = useState(false);
    const onShow = () => setShowCode(true);
    const onBack = () => setShowCode(false);
    return (
        <Modal
            className={clsx(cls.modal, {
                [cls.code]: showCode,
            })}
            isOpen={isOpen}
            maxWidth={430}
            onClose={onClose}
            padding={'none'}
        >
            {showCode ? <Code onBack={onBack} /> : <Content onShow={onShow} />}
        </Modal>
    );
};
