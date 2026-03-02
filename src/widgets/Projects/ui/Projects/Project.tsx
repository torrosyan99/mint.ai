import { useState } from 'react';
import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
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

export const Project = ({ description, title, date }: ProjectType) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <>
            <div className={cls.project}>
                <div className={cls.info}>
                    <P font={'semibold'} size={'lg'} className={cls.itemTitle}>
                        {title}
                    </P>
                    <P className={cls.description}>{description}</P>
                    <P size={'xs'} className={cls.date}>
                        {date}
                    </P>
                </div>
                <div className={cls.buttons}>
                    <Link to={PagePaths.PROJECT}>
                        <MessagesSvg />
                    </Link>
                    <button className={cls.deleteButton} onClick={onOpen}>
                        <TrashBinSvg />
                    </button>
                </div>
            </div>
            <Modal className={cls.modal} isOpen={isOpen} onClose={onClose}>
                <P color={'dark'} font={'semibold'} size={'lg'}>
                    Удалить проект?
                </P>
                <P className={cls.modalText} color={'secondary'}>
                    Уверены, что хотите удалить проект
                </P>
                <div className={cls.modalButtons}>
                    <Button
                        variant={'primary'}
                        hSize={'sm'}
                        radius={'sm'}
                        padding={'md'}
                        fontSize={'xs'}
                        onClick={onClose}
                    >
                        Отмена
                    </Button>
                    <Button
                        variant={'dark'}
                        hSize={'sm'}
                        radius={'sm'}
                        padding={'md'}
                        fontSize={'xs'}
                    >
                        Удалить
                    </Button>
                </div>
            </Modal>
        </>
    );
};
