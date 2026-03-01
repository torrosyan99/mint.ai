import { useState } from 'react';

import chatgptS from '@/shared/assets/images/chatgpt-2.png';
import chatgpt from '@/shared/assets/images/chatgpt-3.png';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';
import { MobileSheet } from '@/shared/ui/MobileSheet/MobileSheet.tsx';

import ArrowBottomSvg from '@icons/arrow-bottom.svg?react';

import { Content } from '../Content/Content.tsx';
import cls from './AiSelect.module.css';

export const AiSelect = () => {
    const isMobile = useMediaQuery('(max-width: 1280px)');
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => isMobile && setIsOpen(true);

    const MainButton = (
        <Button className={cls.mainButton} variant={'primary'} onClick={onClick}>
            <img className={cls.gpt} src={chatgpt} alt={'chatgpt'} />
            {!isMobile && <span>GPT 5 mini</span>}
            <ArrowBottomSvg />
        </Button>
    );

    return isMobile ? (
        <>
            {MainButton}
            <MobileSheet className={cls.sheet} innerClassName={cls.sheetInner} isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className={cls.mobileTop}>
                    <img src={chatgptS} alt={'chatgpt'} />
                    <span>GPT 5 mini</span>
                </div>
                <Content />
            </MobileSheet>
        </>
    ) : (
        <Dropdown
            dropdownClass={cls.dropdown}
            align={'start'}
            sideOffset={8}
            Button={MainButton}
            portal={false}
        >
            {<Content />}
        </Dropdown>
    );
};
