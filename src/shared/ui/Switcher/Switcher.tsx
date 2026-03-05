import { type ReactNode, useEffect, useRef, useState } from 'react';

import cls from './Switcher.module.css';
import clsx from "clsx";

interface Param {
    buttonTitle: string | ReactNode;
    Component: ReactNode;
}

interface SwitcherProps {
    params: [Param, Param];
    variant?:'primary' | 'secondary' | 'tertiary';
    className?: string;
}
export const Switcher = ({ params, variant='primary', className }: SwitcherProps) => {
    const [index, setIndex] = useState(0);

    const firstButtonRef = useRef<HTMLButtonElement>(null);
    const secondButtonRef = useRef<HTMLButtonElement>(null);

    const [width, setWidth] = useState(0);
    const [x, setX] = useState(0);

    useEffect(() => {
        const btn = index === 0 ? firstButtonRef.current : secondButtonRef.current;
        if (!btn) return;

        setWidth(btn.offsetWidth);
        setX(btn.offsetLeft);
    }, [index]);

    return (
      <>
          <div className={clsx(cls.switcher, cls[variant], className)}>
              <button className={clsx(cls.button, {
                  [cls.active]: index === 0
              })} ref={firstButtonRef} onClick={() => setIndex(0)}>
                  {params[0].buttonTitle}
              </button>
              <button className={clsx(cls.button, {
                  [cls.active]: index === 1
              })} ref={secondButtonRef} onClick={() => setIndex(1)}>
                  {params[1].buttonTitle}
              </button>

              <div className={cls.bg} style={{ width, transform: `translateX(${x}px)` }} />
          </div>

          {params[index].Component}
      </>
    );
};