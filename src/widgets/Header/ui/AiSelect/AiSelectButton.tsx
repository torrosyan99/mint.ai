import CountSvg from '@/shared/assets/icons/count-icon.svg?react';
import PinSvg from '@/shared/assets/icons/pin.svg?react';
import chatgpt from '@/shared/assets/images/chatgpt.png';
import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './AiSelect.module.css';

export const AiSelectButton = () => {
    return (
        <Button
            className={cls.button}
            hSize={'none'}
            padding={'sm'}
            wFull
            as={'button'}
        >
            <img src={chatgpt} />
            <span>
                <span className={cls.aiName}>ChatGPT 5.2</span>
                <span>Новейшая нейросеть от OpenAI</span>
            </span>
            <span className={cls.count}>
                30 <CountSvg />
            </span>
            <span className={cls.pin}>
                <PinSvg />
            </span>
        </Button>
    );
};
