import { Projects } from '@/widgets/Projects';

const ProjectsPage = () => {
  return <Projects projects={[{
    title:'Название проекта 1',
    description:'Краткое описание моего проекта',
    date:'Создан 05.02.2026'
  },{
    title:'Название проекта 2',
    description:'Краткое описание моего проекта',
    date:'Создан 05.02.2026'
  }]} />;
};

export default ProjectsPage;
