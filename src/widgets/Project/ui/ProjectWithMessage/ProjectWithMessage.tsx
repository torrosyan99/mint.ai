import { Link } from 'react-router-dom';

import { ChatForm } from '@/features/ChatForm';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import ArrowRightSvg from '@icons/arrow-rigth-2.svg?react';
import CountSvg from '@icons/count-icon.svg?react';
import MenuDotsSvg from '@icons/menu-dots.svg?react';

import cls from './ProjectWithMessage.module.css';

export const ProjectWithMessage = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.top}>
                <div className={cls.paths}>
                    <Link className={cls.link} to={PagePaths.PROJECTS}>
                        <P font={'medium'} size={'lg'}>
                            Проекты
                        </P>
                    </Link>
                    <ArrowRightSvg />
                    <P font={'medium'}color={'dark'}  size={'lg'}>
                        Проект тестовый
                    </P>
                </div>
                <ButtonIcon
                    className={cls.menuButton}
                    size={'xs'}
                    radius={'xs'}
                >
                    <MenuDotsSvg />
                </ButtonIcon>
            </div>
            <ChatForm />
            <P className={cls.text} color={'secondary'} size={'sm'}>
                Стоимость 400 <CountSvg /> за одно сообщение. Нейросеть может
                ошибаться
            </P>
        </div>
    );
};
