import cls from './AllServices.module.css'
import {Container} from "@/shared/ui/Container/Container.tsx";
import {Title} from "@/shared/ui/Title/Title.tsx";
import {P} from "@/shared/ui/P/P.tsx";

export const AllServices = () => {
  return (
    <Container className={cls.container}>
       <Title className={cls.title} h={'h5'}>
         Все нейросети
       </Title>
      <P className={cls.text}>
        Здесь собраны все нейросети из нашей коллекции.<br />
        Напишите, какую задачу нужно решить и умный поиск подберёт самую подходящую нейронку.
      </P>
    </Container>
  );
};
