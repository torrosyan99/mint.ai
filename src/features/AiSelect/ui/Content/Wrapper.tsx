import cls from './Content.module.css'
import {P} from "@/shared/ui/P/P.tsx";
import type {PropsWithChildren} from "react";

interface WrapperProps {
  title: string
}

export const Wrapper = ({title, children}:PropsWithChildren<WrapperProps>) => {
  return (
    <div className={cls.wrapper}>
       <P className={cls.title} size={'sm'} font={'medium'}>{title}</P>
      <div className={cls.list}>
        {children}
      </div>
    </div>
  );
};
