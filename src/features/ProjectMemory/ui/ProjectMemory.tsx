import { Textarea } from '@/shared/ui/Input/Textarea.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import InfoCircleSvg from '@icons/info-circle.svg?react';

import cls from './ProjectMemory.module.css';
import {AddButton} from "./AddButton.tsx";

export const ProjectMemory = () => {
    return (
        <div className={cls.projectMemory}>
            <P className={cls.title} color={'dark'} size={'lg'} font={'medium'}>
                Память проекта
            </P>
            <P className={cls.text} color={'secondary'} size={'sm'}>
                Документы и заметки - ваша персональная база знаний. Загружайте
                файлы, чтобы нейросеть могла мгновенно использовать их контекст
                в любом чате проекта.
            </P>
            <div className={cls.info}>
                <P font={'medium'}>Инструкция для проекта</P>
                <InfoCircleSvg />
            </div>
            <Textarea
                max={1000}
                className={cls.textarea}
                placeholder={'Инструкция для нейросети'}
            ></Textarea>
          <div className={cls.buttons}>
            <AddButton value={'Заметки'}  />
            <AddButton value={'Файлы'}  />

          </div>
        </div>
    );
};
