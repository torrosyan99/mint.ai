import { useState } from 'react';

import { CreateProject } from '@/features/CreateProject';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Search } from '@/shared/ui/Search/Search.tsx';

import AddSvg from '@icons/add.svg?react';

import { EmptyProjects } from '../EmptyProjects/EmptyProjects.tsx';
import { Sorting } from '../Sorting/Sorting.tsx';
import {Project, type ProjectType} from './Project.tsx';
import cls from './Projects.module.css';
import {P} from "@/shared/ui/P/P.tsx";

interface ProjectsProps {
    projects: ProjectType[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const onClick = () => setIsOpenForm(true);
    return (
        <div className={cls.projects}>
            <div className={cls.top}>
              <P size={'lg'} className={cls.title} font={'semibold'}>
                Проекты
              </P>
                {projects.length > 0 && (
                    <Button
                        className={cls.button}
                        variant={'primary'}
                        padding={'md'}
                        hSize={'xl'}
                        onClick={onClick}
                    >
                        <AddSvg />
                        Новый проект
                    </Button>
                )}
                <Search
                    className={cls.search}
                    padding={'sm'}
                    variant={'tertiary'}
                    hSize={'md'}
                    placeholder="Поиск проектов"
                />
            </div>
            {projects.length > 0 && <Sorting />}
            {projects.length > 0 ?   <div className={cls.list}>
              {projects.map(project => (<Project {...project} />))}
            </div> : <EmptyProjects onClick={onClick} />}

          <div className={cls.list}></div>
            <CreateProject isOpen={isOpenForm} setIsOpen={setIsOpenForm} />
        </div>
    );
};
