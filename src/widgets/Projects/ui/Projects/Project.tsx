import { useState } from 'react';
import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import MessagesSvg from '@icons/messages.svg?react';
import TrashBinSvg from '@icons/trash-bin.svg?react';

import cls from './Projects.module.css';

export interface ProjectType {
    title: string;
    description: string;
    date: string;
}

const modalButtonProps = {
    hSize: 'sm',
    radius: 'sm',
    padding: 'lg',
    fontSize: 'xs',
} as const;
export const Project = ({ description, title, date }: ProjectType) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <>
            <div className={cls.project}>
                <div className={cls.info}>
                    <P font={'semibold'} size={'lg'} color={'var(--color-38)'}>
                        {title}
                    </P>
                    <P className={cls.description}>{description}</P>
                    <P size={'xs'} color={'var(--color-26)'}>
                        {date}
                    </P>
                </div>
                <div className={cls.buttons}>
                    <Link className={cls.messagesButton} to={PagePaths.PROJECT}>
                        <MessagesSvg />
                    </Link>
                    <button className={cls.deleteButton} onClick={onOpen}>
                        <TrashBinSvg />
                    </button>
                </div>
            </div>
            <Modal
                className={cls.modal}
                maxWidth={316}
                isOpen={isOpen}
                onClose={onClose}
                closeCircleFull
            >
                <P color={'dark'} font={'semibold'} size={'lg'}>
                    Удалить проект?
                </P>
                <P className={cls.modalText} size={'sm'} color={'secondary'}>
                    Уверены, что хотите удалить проект
                </P>
                <Buttons>
                    <Button
                        variant={'primary'}
                        onClick={onClose}
                        {...modalButtonProps}
                    >
                        Отмена
                    </Button>
                    <Button variant={'dark'} {...modalButtonProps}>
                        Удалить
                    </Button>
                </Buttons>
            </Modal>
        </>
    );
};
