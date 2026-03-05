import clsx from 'clsx';
import { useState } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import { Form } from '../Form/Form.tsx';
import { Payment } from '../Payment/Payment.tsx';
import { Success } from '../Success/Success.tsx';
import cls from './PromocodeForm.module.css';

interface PromocodeForm {
    isOpen: boolean;
    onClose: () => void;
}

export type FormType = 'FORM' | 'ERROR' | 'SUCCESS' | 'PAYMENT';

export const PromocodeForm = ({ isOpen, onClose }: PromocodeForm) => {
    const [type, setType] = useState<FormType>('FORM');
    return (
        <Modal
            className={clsx(cls.modal, {
                [cls.error]: type === 'ERROR',
            })}
            isOpen={isOpen}
            onClose={onClose}
            padding={'none'}
            title={type === 'FORM' ? {
              value: 'Введите промокод',
              h:'h6'
            } : undefined}
        >
            {type === 'FORM' && <Form type={type} setType={setType} />}
            {type === 'ERROR' && <Form type={type} setType={setType} />}
            {type === 'SUCCESS' && <Success setType={setType} />}
            {type === 'PAYMENT' && <Payment />}
        </Modal>
    );
};
