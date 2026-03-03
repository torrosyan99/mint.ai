import cls from './Box.module.css'
import type {PropsWithChildren} from "react";
import clsx from "clsx";


interface BoxProps {
  className?: string;
}

export const Box = ({children, className}:PropsWithChildren<BoxProps>) => {
  return (
    <div className={clsx(cls.box, className)}>
      {children}
    </div>
  );
};
