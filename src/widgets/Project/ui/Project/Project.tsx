import { ProjectMemory } from '@/features/ProjectMemory';

import { Message } from '../Message/Message.tsx';
import { ProjectWithMessage } from '../ProjectWithMessage/ProjectWithMessage.tsx';
import cls from './Project.module.css';

export const Project = () => {
    return (
        <div className={cls.row}>
            <div className={cls.left}>
                <ProjectWithMessage />
                <div className={cls.list}>
                    <Message title={'Косинус 2'} date={'08.02.2026'} />
                </div>
            </div>
            <div className={cls.right}>
                <ProjectMemory />
            </div>

        </div>
    );
};
