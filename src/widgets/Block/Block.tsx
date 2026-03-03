import cls from './Block.module.css'
import type {PropsWithChildren} from "react";
import clsx from "clsx";

interface BlockProps {
  className?: string
}

export const Block = ({children, className}:PropsWithChildren<BlockProps>) => {
  return (
    <div className={clsx(cls.block, className)}>
      {children}
    </div>
  );
};
