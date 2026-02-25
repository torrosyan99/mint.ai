import { useState } from 'react';

import chatgpt from '@/shared/assets/images/chatgpt.png';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';
import { MobileSheet } from '@/shared/ui/MobileSheet/MobileSheet.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';

import ArrowBottomSvg from '@icons/arrow-bottom.svg?react';
import PinSvg from '@icons/pin.svg?react';

import cls from './AiSelect.module.css';

export const AiSelect = () => {
    const mobile = useMediaQuery('(max-width: 1280px)');
    const [isMobile, setIsMobile] = useState(false);
    const MainButton = (
        <Button
            className={cls.aiSelectButton}
            onClick={() => {
                mobile ? setIsMobile(!isMobile) : null;
            }}
        >
            <img src={chatgpt} alt={'chatgpt'} />
            {!mobile && <span>GPT 5 mini</span>}
            <ArrowBottomSvg />
        </Button>
    );

    const content = (
        <>
            <div className={cls.top}>
                <Search className={cls.search} placeholder="Поиск нейросети" />
                <ButtonIcon>
                    <PinSvg />
                </ButtonIcon>
            </div>
            <div className={cls.wrapper}>
                <P color={'secondary'} font={'medium'}>
                    Избранные
                </P>
                <div className={cls.list}></div>
            </div>
        </>
    );

    return !mobile ? (
        <Dropdown
            dropdownClass={cls.dropdown}
            align={'start'}
            sideOffset={10}
            Button={MainButton}
        >
            {content}
        </Dropdown>
    ) : (
        <>
            {MainButton}
            <MobileSheet opened={isMobile} setOpened={setIsMobile} border={'sm'}>
                {content}
            </MobileSheet>
        </>
    );
};
