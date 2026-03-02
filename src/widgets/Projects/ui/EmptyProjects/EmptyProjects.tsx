import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import AddSvg from '@icons/add.svg?react';
import AddProjectSvg from '@icons/add-project.svg?react';
import cls from './EmptyProjects.module.css'
interface EmptyProjectsProps {
  onClick: () => void;
}
export const EmptyProjects = ({onClick}:EmptyProjectsProps) => {
  return (
    <div className={cls.content}>
      <AddProjectSvg className={cls.icon} />
      <div>
        <P size={'lg'} font={'semibold'}>
          Хотите начать проект?
        </P>
        <P className={cls.text}>
          Загружайте материалы, устанавливайте собственные
          инструкции и организуйте обсуждения в одном месте.
        </P>
      </div>
      <Button
        className={cls.button}
        fontSize={'xs'}
        variant={'none'}
        padding={'md'}
        hSize={'lgCompact'}
        onClick={onClick}
      >
        <AddSvg />
        Создать проект
      </Button>
    </div>

  );
};
