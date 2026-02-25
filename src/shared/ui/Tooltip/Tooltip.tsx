import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from '@floating-ui/react';
import clsx from 'clsx';
import { type PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

import TooltipSvg from '@icons/tooltip-icon.svg?react';

import cls from './Tooltip.module.css';

interface TooltipProps {
    message: string;
    placement?: 'top' | 'bottom';
    offsetSize?: number;
}

export function Tooltip({
    children,
    message,
    offsetSize = 12,
    placement = 'bottom',
}: PropsWithChildren<TooltipProps>) {
    const [open, setOpen] = useState(false);

    const { refs, floatingStyles } = useFloating({
        open,
        placement,
        middleware: [offset(offsetSize), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    return (
        <>
            <div
                ref={refs.setReference}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {children}
            </div>

            {open &&
                createPortal(
                    <div
                        className={cls.message}
                        ref={refs.setFloating}
                        style={{
                            ...floatingStyles,
                        }}
                    >
                        {message}
                        <TooltipSvg className={clsx(cls.svg, cls[placement])} />
                    </div>,
                    document.body,
                )}
        </>
    );
}
