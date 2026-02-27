import { Wrapper } from '@/features/AiSelect/ui/Content/Wrapper.tsx';

import chatgpt from '@/shared/assets/images/chatgpt-2.png';
import klingMotion from '@/shared/assets/images/kling-motion.png';
import VideoGenerateSvg from '@icons/video-generate.svg?react'
import PresentationGenerateSvg from '@icons/presentation-generate.svg?react'
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';

import PinSvg from '@icons/pin.svg?react';

import { AiButton } from '../AiButton/AiButton.tsx';
import cls from './Content.module.css';

export const Content = () => {
    return (
        <>
            <div className={cls.top}>
                <Search
                    className={cls.search}
                    placeholder={'Поиск нейросети'}
                    variant={'primary'}
                />
                <ButtonIcon className={cls.pin} radius={'sm'}>
                    <PinSvg width={16} height={16} />
                </ButtonIcon>
            </div>
            <Wrapper title={'Избранные'}>
                <AiButton
                    unpinned
                    icon={<img src={chatgpt} alt={'chatgpt'} />}
                    title={'ChatGPT 5.2'}
                    text={'Новейшая нейросеть от OpenAI'}
                    count={30}
                />
                <AiButton
                    unpinned
                    icon={<img src={klingMotion} alt={'kling-motion'} />}
                    title={'Kling Motion Control'}
                    text={
                        'Новейшая нейросеть от Kling  переноса движений на фото'
                    }
                    count={400}
                />
            </Wrapper>
          <Wrapper title={'Популярные'}>
            <AiButton
              icon={<img src={chatgpt} alt={'chatgpt'} />}
              title={'ChatGPT 5.2'}
              text={'Новейшая нейросеть от OpenAI'}
              count={30}
            />
            <AiButton
              icon={<VideoGenerateSvg />}
              title={'Генератор видео'}
              text={
                'Генерация реалистичного видео по тексту и картинке'
              }
              count={200}
            />
            <AiButton
              icon={<PresentationGenerateSvg />}
              title={'Генератор презентаций PRO'}
              text={
                'Мощная нейросеть для генерации стильных презентаций за 5 минут'
              }
              count={300}
            />
          </Wrapper>
        </>
    );
};
