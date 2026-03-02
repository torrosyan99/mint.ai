
import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import CloseSvg from '@icons/close.svg?react';

import cls from './Banner.module.css';

interface BannerProps {
  setShowBanner: (showBanner: boolean) => void;
}

export const Banner = ({setShowBanner}:BannerProps) => {
    const onClose = () => setShowBanner(false);

    return (
        <div className={cls.banner}>
            <P className={cls.text}>AI Настя – новая нейросеть для общения</P>
            <Button className={cls.button} radius={'md'} padding={'none'} fontSize={'xs'} hSize={'sm'} variant="dark">
                Начать <span>общаться</span>
            </Button>
            <button className={cls.close} onClick={onClose}>
                <CloseSvg />
            </button>
        </div>
    );
};
