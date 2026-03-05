import cls from './Input.module.css'
import type {InputHTMLAttributes} from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({className, ...others}:InputProps) => {
  return (
    <input className={clsx(cls.input, className)} {...others} />
  );
};
