import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Input/Textarea.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';

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
            maxWidth={500}
            padding={'none'}
            isOpen={isOpen}
            onClose={onClose}
            title={{ value: 'Создать новый проект', h: 'h6' }}
        >
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
                <Box bg={'var(--color-6)'} padding={'md'} className={cls.box}>
                    <LampSvg />В проектах чаты, файлы и пользовательские
                    инструкции хранятся в одном месте. Используйте их для
                    текущей работы или просто для поддержания порядка.
                </Box>
                <Buttons justifyContent={'end'}>
                    <Button
                        onClick={onClose}
                        padding={'lg'}
                        hSize={'xl'}
                        radius={'lg'}
                        variant={'primary'}
                    >
                        Отменить
                    </Button>
                    <Button
                        padding={'md'}
                        hSize={'xl'}
                        radius={'lg'}
                        variant={'dark'}
                    >
                        Создать
                    </Button>
                </Buttons>
            </div>
        </Modal>
    );
};
