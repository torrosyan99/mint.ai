import { useState } from 'react';

import { AI, selectAi } from '@/entities/ai';

import chatgptS from '@/shared/assets/images/chatgpt-2.png';
import chatgpt from '@/shared/assets/images/chatgpt-3.png';
import klingMotion from '@/shared/assets/images/kling-motion.png';
import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';
import { MobileSheet } from '@/shared/ui/MobileSheet/MobileSheet.tsx';

import ArrowBottomSvg from '@icons/arrow-bottom.svg?react';

import { Content } from '../Content/Content.tsx';
import cls from './AiSelect.module.css';

const logos = {
    [AI.gpt]: chatgpt,
    [AI.klingMotion]: klingMotion,
};

export const AiSelect = () => {
    const isMobile = useMediaQuery('(max-width: 1280px)');
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ai = useAppSelector(selectAi);
    const onClick = () => isMobile && setIsMobileOpen(true);

    const MainButton = (
        <Button
            className={cls.mainButton}
            variant={'primary'}
            onClick={onClick}
        >
            <img className={cls.gpt} src={logos[ai]} alt={ai} />
            {!isMobile && <span>{ai}</span>}
            <ArrowBottomSvg />
        </Button>
    );

    return isMobile ? (
        <>
            {MainButton}
            <MobileSheet
                className={cls.sheet}
                innerClassName={cls.sheetInner}
                isOpen={isMobileOpen}
                setIsOpen={setIsMobileOpen}
            >
                <div className={cls.mobileTop}>
                    <img src={chatgptS} alt={'chatgpt'} />
                    <span>GPT 5 mini</span>
                </div>
                <Content setIsOpen={setIsMobileOpen} />
            </MobileSheet>
        </>
    ) : (
        <Dropdown
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            dropdownClass={cls.dropdown}
            align={'start'}
            sideOffset={8}
            Button={MainButton}
            portal={false}
        >
            {<Content setIsOpen={setIsOpen} />}
        </Dropdown>
    );
};
