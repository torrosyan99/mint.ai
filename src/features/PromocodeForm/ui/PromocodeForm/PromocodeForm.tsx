import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import { Form } from '../Form/Form.tsx';
import cls from './PromocodeForm.module.css';
import {useState} from "react";
import clsx from "clsx";
import {Success} from "../Success/Success.tsx";

interface PromocodeForm {
    isOpen: boolean;
    onClose: () => void;
}
export type FormType = 'FORM' | 'ERROR' | 'SUCCESS';

export const PromocodeForm = ({ isOpen, onClose }: PromocodeForm) => {
    const [type, setType] = useState<FormType>('FORM');
    return (
        <Modal className={clsx(cls.modal, {
            [cls.error]: type === 'ERROR'
        })} isOpen={isOpen} onClose={onClose}>

            {type === 'FORM' && <Form type={type} setType={setType} />}
            {type === 'ERROR' && <Form  type={type} setType={setType} />}
            {type === 'SUCCESS' && <Success />}
        </Modal>
    );
};
