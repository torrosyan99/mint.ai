import { P } from '@/shared/ui/P/P.tsx';

import type { Image as ImageType } from './Images';
import cls from './Images.module.css';
import DownloadSvg from '@icons/download.svg?react'
import TrashBinSvg from '@icons/trash-bin.svg?react'

export const Image = ({ src }: ImageType) => {
    return (
        <div className={cls.imageWrapper}>
            <img className={cls.image} src={src} alt={'img'} />
            <div className={cls.info}>
                <P className={cls.imageTitle} font={'medium'}>
                    ae69fb08e4987ry750afbsfergr5454654
                </P>
                <P size={'sm'}>image - 2.72 MB</P>
            </div>
          <div className={cls.instruments}>
            <button className={cls.downloadButton}>
              <DownloadSvg />
              <P font={'medium'}>Скачать</P>
            </button>
            <button className={cls.deleteButton}>
              <TrashBinSvg />
            </button>
          </div>
        </div>
    );
};
