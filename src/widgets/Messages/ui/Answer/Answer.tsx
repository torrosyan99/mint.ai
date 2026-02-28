import type {PropsWithChildren} from "react";
import {TypingIndicator} from "@/shared/ui/TypingIndicator/TypingIndicator.tsx";
import {StreamingText} from "@/features/StreamingText";
import cls from './Answer.module.css'
interface AnswerProps {
  status:'waiting' | 'streaming'  | 'done'
}

export const Answer = ({children, status}:PropsWithChildren<AnswerProps>) => {

  if(status === 'waiting') return <div className={cls.answer}> <TypingIndicator /></div>


  if (status === 'streaming') {
    return <div className={cls.answer}>
      <StreamingText text={String(children)} />
    </div> ;
  }

  return (
    <div className={cls.answer}>
      {children}
    </div>
  );
};
