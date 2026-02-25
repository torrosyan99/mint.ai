import clsx from 'clsx';
import { type PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSwipeable } from 'react-swipeable';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';

import CloseSvg from '@icons/close.svg?react';

import cls from './MobileSheet.module.css';

interface MobileSheetProps {
    border?: 'none' | 'xs' | 'sm';
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    className?: string;
}

export const MobileSheet = ({
    border = 'xs',
    isOpen,
    setIsOpen,
    children,
  className,
}: PropsWithChildren<MobileSheetProps>) => {
    if (!isOpen) return;

    const isDesktop = useMediaQuery('(min-width: 1280px)');
    const [show, setShow] = useState(false);
    const [height, setHeight] = useState(50);
    const closeClick = () => {
        setShow(false);
        setTimeout(() => setIsOpen(false), 400);
    };

    useEffect(() => {
        if (isOpen) setTimeout(() => setShow(true), 100);

        document.body.classList.add('body-overflow');
        return () => {
            document.body.classList.remove('body-overflow');
        };
    }, []);

    const handlers = useSwipeable({
        onSwipedUp: () => {
            if (height === 80) return;
            setHeight(80);
        },
        onSwipedDown: () => {
            if (height === 80) {
                setHeight(50);
                return;
            }
            setShow(false);
            setTimeout(() => setIsOpen(false), 400);
        },
        delta: 100,
    });

    useEffect(() => {
        if (isDesktop && isOpen) setIsOpen(false);
    }, [isDesktop, isOpen]);

    return createPortal(
        <>
            <div className={cls.outline}>
                <ButtonIcon
                    className={cls.closeButton}
                    size={'none'}
                    radius={'sm'}
                    onClick={closeClick}
                >
                    <CloseSvg />
                </ButtonIcon>
            </div>
            <div
                className={clsx(cls.content, [cls[border], className], {
                    [cls.showed]: show,
                })}
                style={{ height: `${height}%` }}
            >
                <div className={cls.top} {...handlers}>
                    <div className={cls.topLine} />
                </div>
                <div className={cls.inner}>{children}</div>
            </div>
        </>,
        document.body,
    );
};
