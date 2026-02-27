import { forwardRef } from 'react';

import chatgpt from '@/shared/assets/images/chatgpt-3.png';
import ArrowBottomSvg from '@icons/arrow-bottom.svg?react';
import { Button } from '@/shared/ui/Button/Button.tsx';


interface MainButtonProps {
    onClick?: () => void;
}

export const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(({ onClick }, ref) => {
    return (
        <Button ref={ref} variant={'primary'} onClick={onClick}>
            <img src={chatgpt} alt={'chatgpt'} />
            GPT 5 mini
            <ArrowBottomSvg />
        </Button>
    );
});
