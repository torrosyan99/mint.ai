import cls from './AllAi.module.css'
import {Title} from "@/shared/ui/Title/Title.tsx";
import {Container} from "@/shared/ui/Container/Container.tsx";
import {P} from "@/shared/ui/P/P.tsx";

export const AllAi = () => {
  return (
    <Container className={cls.container}>
      <Title className={cls.title} h={'h5'}>
        Все нейросети
      </Title>
      <P className={cls.text}>
        Здесь собраны все нейросети из нашей коллекции.
        Напишите, какую задачу нужно решить и умный поиск подберёт самую подходящую нейронку.
      </P>
    </Container>
  );
};
