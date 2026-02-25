import { useState } from 'react';

import { AiSelectButton } from '@/widgets/Header/ui/AiSelect/AiSelectButton.tsx';

import chatgpt from '@/shared/assets/images/chatgpt.png';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';
import { MobileSheet } from '@/shared/ui/MobileSheet/MobileSheet.tsx';
// import { MobileSheet } from '@/shared/ui/MobileSheet/MobileSheet.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';

import AiIconsSvg from '@icons/ai-icons-2.svg?react';
import ArrowBottomSvg from '@icons/arrow-bottom.svg?react';
import ArrowRightSvg from '@icons/arrow-rigth.svg?react';
import PinSvg from '@icons/pin.svg?react';

import cls from './AiSelect.module.css';

export const AiSelect = () => {
    const isMobile = useMediaQuery('(max-width: 1280px)');
    const [show, setShow] = useState(false);
    const MainButton = (
        <Button
            className={cls.aiSelectButton}
            onClick={() => {
                isMobile ? setShow(!show) : null;
            }}
        >
            <img src={chatgpt} alt={'chatgpt'} />
            {!isMobile && <span>GPT 5 mini</span>}
            <ArrowBottomSvg />
        </Button>
    );

    const content = (
        <>
            <div className={cls.top}>
                <Search className={cls.search} placeholder="Поиск нейросети" />
                <ButtonIcon radius={'sm'}>
                    <PinSvg />
                </ButtonIcon>
            </div>
            <div className={cls.wrapper}>
                <P
                    className={cls.wrapperTitle}
                    color={'secondary'}
                    size={'sm'}
                    font={'medium'}
                >
                    Избранные
                </P>
                <div className={cls.list}>
                    <AiSelectButton />
                    <AiSelectButton />
                </div>
            </div>
            <div className={cls.wrapper}>
                <P
                    className={cls.wrapperTitle}
                    color={'secondary'}
                    size={'sm'}
                    font={'medium'}
                >
                    Популярные
                </P>
                <div className={cls.list}>
                    <AiSelectButton />
                    <AiSelectButton />
                    <AiSelectButton />
                    <AiSelectButton />
                </div>
            </div>
            <div className={cls.bottom}>
                <Button
                    variant={'secondary'}
                    hSize={'x2l'}
                    radius={'lgCompact'}
                    wFull
                    center
                >
                    <AiIconsSvg />
                    Все нейросети и возможности
                    <ArrowRightSvg />
                </Button>
            </div>
        </>
    );

    return isMobile ? (
        <>
            {MainButton}
            <MobileSheet
                border={'none'}
                className={cls.sheet}
                isOpen={show}
                setIsOpen={setShow}
            >
                {content}
            </MobileSheet>
        </>
    ) : (
        <Dropdown
            dropdownClass={cls.dropdown}
            align={'start'}
            sideOffset={10}
            Button={MainButton}
        >
            {content}
        </Dropdown>
    );
};
