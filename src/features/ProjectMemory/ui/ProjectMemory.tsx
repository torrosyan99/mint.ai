import { Box } from '@/shared/ui/Box/Box.tsx';
import { Textarea } from '@/shared/ui/Input/Textarea.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import InfoCircleSvg from '@icons/info-circle.svg?react';

import { AddButton } from './AddButton.tsx';
import cls from './ProjectMemory.module.css';

export const ProjectMemory = () => {
    return (
        <Box
            className={cls.projectMemory}
            radius={'md'}
            padding={'x2l'}
            bg={'var(--color-3)'}
        >
            <P
                className={cls.title}
                color={'var(--color-10)'}
                size={'lg'}
                font={'medium'}
            >
                Память проекта
            </P>
            <P className={cls.text} color={'var(--color-13)'} size={'sm'}>
                Документы и заметки - ваша персональная база знаний. Загружайте
                файлы, чтобы нейросеть могла мгновенно использовать их контекст
                в любом чате проекта.
            </P>
            <div className={cls.info}>
                <P color={'var(--color-39)'} font={'medium'}>
                    Инструкция для проекта
                </P>
                <InfoCircleSvg />
            </div>
            <Textarea
                max={1000}
                className={cls.textarea}
                placeholder={'Инструкция для нейросети'}
            ></Textarea>
            <div className={cls.buttons}>
                <AddButton value={'Заметки'} />
                <AddButton value={'Файлы'} />
            </div>
        </Box>
    );
};
