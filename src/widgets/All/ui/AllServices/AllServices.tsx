import { ServicesCard } from '@/widgets/All/ui/AllServices/ServicesCard.tsx';
import { Wrapper } from '@/widgets/All/ui/Wrapper.tsx';

import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Container } from '@/shared/ui/Container/Container.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import CropSvg from '@icons/crop-2.svg?react';
import GlobalSvg from '@icons/global-2.svg?react';
import PenSvg from '@icons/pen-2.svg?react';
import PieChartSvg from '@icons/pie-chart-2.svg?react';
import PinSvg from '@icons/pin.svg?react';
import VideoSvg from '@icons/video-3.svg?react';

import { Buttons } from '../Buttons/Buttons.tsx';
import cls from '../global.module.css';

export const AllServices = () => {
    return (
        <Container className={cls.container}>
            <Title className={cls.title} h={'h5'}>
                Все AI сервисы
            </Title>
            <P className={cls.text}>
                Здесь собраны все нейросети из нашей коллекции.
                <br />
                Напишите, какую задачу нужно решить и умный поиск подберёт самую
                подходящую нейронку.
            </P>
            <div className={cls.flex}>
                <Search
                    className={cls.search}
                    variant={'tertiary'}
                    placeholder={'Поиск сервисов'}
                    hSize={'md'}
                />
                <ButtonIcon className={cls.pinButton} radius={'sm'} size={'xl'}>
                    <PinSvg />
                </ButtonIcon>
            </div>
            <Buttons />
            <Wrapper title={'Популярные'}>
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <GlobalSvg />
                        </div>
                    }
                    title={'Перевести текст'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                    unpinned
                />
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <CropSvg />
                        </div>
                    }
                    title={'Создать пост'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <PieChartSvg />
                        </div>
                    }
                    title={'Поиск в Интернете'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <VideoSvg />
                        </div>
                    }
                    title={'Создать видео'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
            </Wrapper>
            <Wrapper title={'Творчество'}>
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <PenSvg />
                        </div>
                    }
                    title={'Удалить водяной знак'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
                <ServicesCard
                    icon={
                        <div className={cls.iconBoxSecond}>
                            <GlobalSvg />
                        </div>
                    }
                    title={'Найти картинку'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <GlobalSvg />
                        </div>
                    }
                    title={'Удалить фон картинки'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
                <ServicesCard
                    icon={
                        <div className={cls.iconBox}>
                            <PieChartSvg />
                        </div>
                    }
                    title={'Перевести текст'}
                    text={
                        'Качественно переведет текст с английского на русский'
                    }
                />
            </Wrapper>
        </Container>
    );
};
