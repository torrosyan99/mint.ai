import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from '@floating-ui/react';
import clsx from 'clsx';
import { type PropsWithChildren, type ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import TooltipSvg from '@icons/tooltip-icon.svg?react';

import cls from './Tooltip.module.css';

type TooltipPlacement =
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';

interface TooltipProps {
    message: string | ReactNode;
    placement?: TooltipPlacement;
    offsetSize?: number;
    size?: 'none' | 'xs' | 'sm';
    className?: string;
    shiftX?: number;
}

export function Tooltip({
    children,
    message,
    offsetSize = 12,
    placement = 'bottom',
    className,
    shiftX,
    size = 'sm',
}: PropsWithChildren<TooltipProps>) {
    if (!message) return null;
    const [open, setOpen] = useState(false);

    const {
        refs,
        floatingStyles,
        placement: finalPlacement,
    } = useFloating({
        open,
        placement,
        middleware: [
            offset(() => ({
                mainAxis: offsetSize,
                crossAxis: shiftX,
            })),
            flip(),
            shift(),
        ],
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
                        className={clsx(cls.message, cls[size], className)}
                        ref={refs.setFloating}
                        style={{
                            ...floatingStyles,
                        }}
                    >
                        {message}
                        <TooltipSvg
                            className={clsx(cls.svg, cls[finalPlacement])}
                        />
                    </div>,
                    document.body,
                )}
        </>
    );
}
