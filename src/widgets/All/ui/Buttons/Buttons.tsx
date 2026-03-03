import ScrollContainer from 'react-indiana-drag-scroll';

import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './Buttons.module.css';

export const Buttons = () => {


    return (
        <ScrollContainer className={cls.list} vertical={false} horizontal       hideScrollbars
        >
            <Button padding={'sm'} variant={'primary'}>Популярные</Button>

            <Button padding={'sm'} variant={'primary'}>Изображения</Button>

            <Button padding={'sm'} variant={'primary'}>Учеба и работа</Button>

            <Button padding={'sm'} variant={'primary'}>Видео</Button>

            <Button padding={'sm'} variant={'primary'}>Аудио</Button>

            <Button padding={'sm'} variant={'primary'}>Поиск и анализ</Button>

            <Button padding={'sm'} variant={'primary'}>Поиск и анализ</Button>
        </ScrollContainer>
    );
};
