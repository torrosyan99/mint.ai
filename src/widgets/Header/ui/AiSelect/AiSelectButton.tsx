import CountSvg from '@/shared/assets/icons/count-icon.svg?react';
import PinSvg from '@/shared/assets/icons/pin.svg?react';
import chatgpt from '@/shared/assets/images/chatgpt-2.png';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import cls from './AiSelect.module.css';

export const AiSelectButton = () => {
    return (
        <Button
            className={cls.button}
            hSize={'none'}
            padding={'sm'}
            radius={'sm'}
            wFull
            as={'div'}
        >
            <img src={chatgpt} alt={'chatgpt'} />
            <div className={cls.info}>
                <P font={'medium'}>ChatGPT 5.2</P>
                <P size="xs" color={'secondary'}>
                    Новейшая нейросеть от OpenAI
                </P>
            </div>
            <div className={cls.count}>
                <CountSvg /> 30
            </div>
            <Tooltip message={'Открепить'} placement={'top'} offsetSize={3.8}>
                <ButtonIcon
                    size={'sm-compact'}
                    variant={'none'}
                    radius={'sm'}
                    className={cls.pin}
                >
                    <PinSvg width={16} height={16} />
                </ButtonIcon>
            </Tooltip>
        </Button>
    );
};
