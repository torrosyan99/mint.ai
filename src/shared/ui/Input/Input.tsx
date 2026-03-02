import cls from './Input.module.css'
import type {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({...others}:InputProps) => {
  return (
    <input className={cls.input} {...others} />
  );
};
