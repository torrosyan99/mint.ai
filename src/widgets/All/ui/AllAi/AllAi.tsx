import { Container } from '@/shared/ui/Container/Container.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ChatGptSvg from '@icons/chatgpt-2.svg?react';
import GeminiSvg from '@icons/gemini-3.svg?react';
import VideoGenerateSvg from '@icons/video-generate-2.svg?react';
import PresentationGenerateSvg from '@icons/presentation-generate-2.svg?react';

import { Buttons } from '../Buttons/Buttons.tsx';
import { Wrapper } from '../Wrapper.tsx';
import cls from '../global.module.css';
import { AiCard } from './AiCard.tsx';

export const AllAi = () => {
    return (
        <Container className={cls.container}>
            <Title className={cls.title} h={'h6'}>
                Все нейросети
            </Title>
            <P className={cls.text}>
                Здесь собраны все нейросети из нашей коллекции. <br />
                Напишите, какую задачу нужно решить и умный поиск подберёт самую
                подходящую нейронку.
            </P>
            <Search
                variant={'tertiary'}
                placeholder={'Поиск нейросети'}
                hSize={'md'}
            />
            <Buttons />
            <Wrapper title={'Популярные'}>
                <AiCard
                    icon={
                        <div className={cls.aiBox}>
                            <ChatGptSvg />
                        </div>
                    }
                    title={'ChatGPT 5.2'}
                    text={'Новейшая нейросеть от OpenAI'}
                    count={30}
                />{' '}
                <AiCard
                    icon={
                        <div className={cls.aiBox}>
                            <GeminiSvg />
                        </div>
                    }
                    title={'Nano Banana Pro'}
                    text={'Лучшая нейросеть по изображению'}
                    count={40}
                />
              <AiCard
                icon={
                  <VideoGenerateSvg />
                }
                title={'Генератор видео'}
                text={'Генерация реалистичного видео по тексту и картинке'}
                count={200}
              />
              <AiCard
                icon={
                  <PresentationGenerateSvg />
                }
                title={'Генератор видео'}
                text={'Генерация реалистичного видео по тексту и картинке'}
                count={200}
              />
            </Wrapper>
          <Wrapper title={'Творчество'}>
            <AiCard
              icon={
                <div className={cls.aiBox}>
                  <ChatGptSvg />
                </div>
              }
              title={'ChatGPT 5.2'}
              text={'Новейшая нейросеть от OpenAI'}
              count={30}
            />{' '}
            <AiCard
              icon={
                <div className={cls.aiBox}>
                  <GeminiSvg />
                </div>
              }
              title={'Nano Banana Pro'}
              text={'Лучшая нейросеть по изображению'}
              count={40}
            />
            <AiCard
              icon={
                <VideoGenerateSvg />
              }
              title={'Генератор видео'}
              text={'Генерация реалистичного видео по тексту и картинке'}
              count={200}
            />
            <AiCard
              icon={
                <PresentationGenerateSvg />
              }
              title={'Генератор видео'}
              text={'Генерация реалистичного видео по тексту и картинке'}
              count={200}
            />
          </Wrapper>
        </Container>
    );
};
