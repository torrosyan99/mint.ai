import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import VideoSvg from '@icons/video-2.svg?react';


export const Videos = () => {
  return (
    <Block>
      <EmptyBlock
        title={'Пока ничего нет'}
        text={
          'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
        }
        icon={<VideoSvg />}
      />
    </Block>
  );
};
