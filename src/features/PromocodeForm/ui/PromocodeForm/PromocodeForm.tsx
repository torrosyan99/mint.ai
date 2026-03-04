import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import { Form } from '../Form/Form.tsx';
import cls from './PromocodeForm.module.css';
import {useState} from "react";
import clsx from "clsx";
import {Success} from "../Success/Success.tsx";
import {Payment} from "../Payment/Payment.tsx";

interface PromocodeForm {
    isOpen: boolean;
    onClose: () => void;
}
export type FormType = 'FORM' | 'ERROR' | 'SUCCESS' | 'PAYMENT';

export const PromocodeForm = ({ isOpen, onClose }: PromocodeForm) => {
    const [type, setType] = useState<FormType>('FORM');
    return (
        <Modal className={clsx(cls.modal, {
            [cls.error]: type === 'ERROR'
        })} isOpen={isOpen} onClose={onClose}>

            {type === 'FORM' && <Form type={type} setType={setType} />}
            {type === 'ERROR' && <Form  type={type} setType={setType} />}
            {type === 'SUCCESS' && <Success setType={setType}/>}
            {type === 'PAYMENT' && <Payment />}
        </Modal>
    );
};
