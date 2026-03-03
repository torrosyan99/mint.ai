import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import SoundwaveSvg from '@icons/soundwave.svg?react';


export const Audio = () => {
  return (
    <Block>
      <EmptyBlock
        title={'Пока ничего нет'}
        text={
          'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
        }
        icon={<SoundwaveSvg />}
      />
    </Block>
  );
};
