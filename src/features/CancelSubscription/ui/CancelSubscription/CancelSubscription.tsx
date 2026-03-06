import { useState } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import { Form } from '../Form/Form.tsx';
import { Notification } from '../Notification/Notification.tsx';
import cls from './CancelSubscription.module.css';

interface CancelSubscriptionProps {
    isOpen: boolean;
    onClose: () => void;
}

export type FormType = 'NOTIFICATION' | 'FORM';
export const CancelSubscription = ({
    isOpen,
    onClose,
}: CancelSubscriptionProps) => {
    const [type, setType] = useState<FormType>('NOTIFICATION');
    const onShowForm = () => setType('FORM');
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={cls.modal}
            maxWidth={type === 'NOTIFICATION' ? 560 : 600}
            title={
                type === 'FORM'
                    ? {
                          value: (
                              <>
                                  Что повлияло на твоё решение отменить
                                  подписку?
                              </>
                          ),
                          maxWidth: 400,
                          h: 'h5',
                      }
                    : undefined
            }
        >
            {type === 'NOTIFICATION' && (
                <Notification onShowForm={onShowForm} onClose={onClose} />
            )}
            {type === 'FORM' && <Form onClose={onClose} />}
        </Modal>
    );
};
