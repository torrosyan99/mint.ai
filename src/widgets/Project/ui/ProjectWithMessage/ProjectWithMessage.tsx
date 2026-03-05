import { Link } from 'react-router-dom';

import { ChatForm } from '@/features/ChatForm';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import ArrowRightSvg from '@icons/arrow-rigth-2.svg?react';
import CountSvg from '@icons/count-icon-2.svg?react';
import MenuDotsSvg from '@icons/menu-dots.svg?react';

import cls from './ProjectWithMessage.module.css';

export const ProjectWithMessage = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.top}>
                <div className={cls.paths}>
                    <Link className={cls.link} to={PagePaths.PROJECTS}>
                        Проекты
                    </Link>
                    <ArrowRightSvg />
                    <P font={'medium'} color={'var(--color-10)'} size={'lg'}>
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
            <P className={cls.text} color={'var(--color-13)'} size={'sm'}>
                Стоимость 400 <CountSvg /> за одно сообщение. Нейросеть может
                ошибаться
            </P>
        </div>
    );
};
