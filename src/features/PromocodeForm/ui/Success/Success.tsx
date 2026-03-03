import cls from './Success.module.css'
import SuccessSvg from "@icons/success.svg?react"
import {Title} from "@/shared/ui/Title/Title.tsx";
import {P} from "@/shared/ui/P/P.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
export const Success = () => {
  return (
    <div  className={cls.success}>
      <SuccessSvg />
      <Title h={'h5'} className={cls.title}>Скидка на подписку</Title>
      <P className={cls.text}>
        Скидка 10% на следующие тарифы: Start, Pro, Ultima
      </P>
      <Button
        variant={'green'}
        hSize={'xl'}
        wFull
        center
      >
        Оформить подписку
      </Button>
    </div>
  );
};
