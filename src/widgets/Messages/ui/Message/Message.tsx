import cls from './Message.module.css'
import type {PropsWithChildren} from "react";

export const Message = ({children}:PropsWithChildren) => {
  return (
    <div className={cls.message}>
      {children}
    </div>
  );
};
