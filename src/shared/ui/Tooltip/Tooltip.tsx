import {
    autoUpdate,
    flip,
    offset, safePolygon,
    shift,
    useFloating, useHover, useInteractions,
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
    const [open, setOpen] = useState(false);

    const { refs, floatingStyles, context, placement: finalPlacement } = useFloating({
        open,
        onOpenChange: setOpen,
        placement,
        middleware: [
            offset({ mainAxis: offsetSize, crossAxis: shiftX }),
            flip(),
            shift({ padding: 6 }),
        ],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
        move: false,
        handleClose: safePolygon({ buffer: 2 }),

    });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    if (!message) return null;

    return (
      <>
          <div ref={refs.setReference} {...getReferenceProps()}>
              {children}
          </div>

          {open &&
            createPortal(
              <div
                ref={refs.setFloating}
                className={clsx(cls.message, cls[size], className)}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                  {message}
                  <TooltipSvg className={clsx(cls.svg, cls[finalPlacement])} />
              </div>,
              document.body,
            )}
      </>
    );
}