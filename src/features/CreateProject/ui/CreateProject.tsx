import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Input/Textarea.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import LampSvg from '@icons/lamp.svg?react';

import cls from './CreateProject.module.css';

interface CreateProjectProps {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
}

export const CreateProject = ({ isOpen, setIsOpen }: CreateProjectProps) => {
    const onClose = () => setIsOpen(false);
    return (
        <Modal
            className={cls.modal}
            closeClass={cls.close}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Title className={cls.title} h={'h6'}>
                Создать новый проект
            </Title>

            <div className={cls.items}>
                <div className={cls.item}>
                    <P className={cls.itemTitle} font={'medium'}>
                        Название проекта
                    </P>
                    <Input placeholder={'Введите название проекта'} />
                </div>
                <div className={cls.item}>
                    <P className={cls.itemTitle} font={'medium'}>
                        Описание
                    </P>
                    <Textarea
                        className={cls.description}
                        placeholder={
                            'Краткое описание вашего проекта (необязательно)'
                        }
                    />
                </div>
                <div className={cls.item}>
                    <P className={cls.itemTitle} font={'medium'}>
                        Системный промт
                    </P>
                    <Textarea
                        className={cls.prompt}
                        placeholder={
                            'Специальная инструкция для нейросети, которая управляет её поведением при ответах.'
                        }
                    />
                </div>
                <div className={cls.box}>
                    <LampSvg />В проектах чаты, файлы и пользовательские
                    инструкции хранятся в одном месте. Используйте их для
                    текущей работы или просто для поддержания порядка.
                </div>
                <div className={cls.buttons}>
                    <Button onClick={onClose} padding={'lg'} hSize={'xl'} radius={'lg'} variant={'primary'}>
                        Отменить
                    </Button>
                    <Button padding={'md'} hSize={'xl'} radius={'lg'} variant={'dark'}>
                        Создать
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
