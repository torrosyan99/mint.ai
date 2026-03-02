import ImgCancelSvg from '@icons/img-cancel.svg?react';
import WaitingSvg from '@icons/waiting.svg?react';

import type { ImageType } from '../../types';
import cls from './Files.module.css';

export const ImageFile = ({ status, src }: ImageType) => {
    if (status === 'waiting')
        return (
            <div className={cls.imgWaiting}>
                <WaitingSvg className={cls.waitingIcon} />
            </div>
        );
    return (
        <div className={cls.wrapper}>
            <img className={cls.img} src={src} alt={'img'} />
            <button className={cls.imgCancel} type={'button'}>
                <ImgCancelSvg />
            </button>
        </div>
    );
};
