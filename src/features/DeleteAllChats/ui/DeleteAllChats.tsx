import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './DeleteAllChats.module.css';

interface DeleteAllChatsProps {
    onClose: () => void;
    isOpen: boolean;
}

const buttonProps = {
    hSize: 'xl',
    radius: 'lg',
    padding: 'lg',
} as const;
export const DeleteAllChats = ({ onClose, isOpen }: DeleteAllChatsProps) => {
    return (
        <Modal maxWidth={420} isOpen={isOpen} onClose={onClose}>
            <Title h={'h5'} color={'var(--color-10)'}>
                Удалить все чаты?
            </Title>
            <P className={cls.text}>
                Это действие нельзя отменить. Все ваши чаты будут удалены
                навсегда.
            </P>
            <Buttons>
                <Button
                    {...buttonProps}
                    variant={'primary'}
                    type={'button'}
                    onClick={onClose}
                >
                    Отмена
                </Button>
                <Button {...buttonProps} variant={'dark'}>
                    Подтвердить
                </Button>
            </Buttons>
        </Modal>
    );
};
