import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import DocumentSvg from '@icons/document-2.svg?react';


export const Documents = () => {
  return (
    <Block>
      <EmptyBlock
        title={'Пока ничего нет'}
        text={
          'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
        }
        icon={<DocumentSvg />}
      />
    </Block>
  );
};
