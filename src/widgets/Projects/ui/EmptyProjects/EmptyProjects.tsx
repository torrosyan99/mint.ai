import { Button } from '@/shared/ui/Button/Button.tsx';
import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import AddProjectSvg from '@icons/add-project.svg?react';
import AddSvg from '@icons/add.svg?react';

import cls from './EmptyProjects.module.css';

interface EmptyProjectsProps {
    onClick: () => void;
}

export const EmptyProjects = ({ onClick }: EmptyProjectsProps) => {
    return (
        <EmptyBlock
            className={cls.content}
            icon={<AddProjectSvg />}
            title={'Хотите начать проект?'}
            text={
                ' Загружайте материалы, устанавливайте собственные\n' +
                '          инструкции и организуйте обсуждения в одном месте.'
            }
        >
            <Button
                className={cls.button}
                fontSize={'xs'}
                variant={'none'}
                padding={'lg'}
                hSize={'lgCompact'}
                onClick={onClick}
            >
                <AddSvg />
                Создать проект
            </Button>
        </EmptyBlock>
    );
};
