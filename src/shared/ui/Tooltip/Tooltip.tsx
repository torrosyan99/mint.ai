import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from '@floating-ui/react';
import clsx from 'clsx';
import {type PropsWithChildren, type ReactNode, useState} from 'react';
import { createPortal } from 'react-dom';

import TooltipSvg from '@icons/tooltip-icon.svg?react';

import cls from './Tooltip.module.css';

interface TooltipProps {
    message: string | ReactNode;
    placement?: 'top' | 'bottom';
    offsetSize?: number;
    size?:'none' | "xs" | 'sm';
    className?: string;
}

export function Tooltip({
    children,
    message,
    offsetSize = 12,
    placement = 'bottom',
  className,
  size = 'sm',
}: PropsWithChildren<TooltipProps>) {
    const [open, setOpen] = useState(false);

    const { refs, floatingStyles, placement:finalPlacement } = useFloating({
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
                        className={clsx(cls.message, cls[size], className)}
                        ref={refs.setFloating}
                        style={{
                            ...floatingStyles,
                        }}
                    >
                        {message}
                        <TooltipSvg className={clsx(cls.svg, cls[finalPlacement])} />
                    </div>,
                    document.body,
                )}
        </>
    );
}
