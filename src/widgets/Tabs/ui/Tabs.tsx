import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import cls from './Tabs.module.css';

interface TabsProps {
    count?: string;
}

export const Tabs = ({  count }: PropsWithChildren<TabsProps>) => {
    return (
        <div className={cls.tabs}>
            <div className={cls.items}>
                <NavLink
                    className={({ isActive }) =>
                        clsx(cls.link, {
                            [cls.active]: isActive,
                        })
                    }
                    to={PagePaths.IMAGES}
                >
                    Изображения
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        clsx(cls.link, {
                            [cls.active]: isActive,
                        })
                    }
                    to={PagePaths.VIDEOS}
                >
                    Видео
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        clsx(cls.link, {
                            [cls.active]: isActive,
                        })
                    }
                    to={PagePaths.AUDIO}
                >
                    Аудио
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        clsx(cls.link, {
                            [cls.active]: isActive,
                        })
                    }
                    to={PagePaths.DOCUMENTS}
                >
                    Документы
                </NavLink>
            </div>
            <div className={cls.end}>
                <P className={cls.title} font={'medium'}>
                    Мои файлы
                </P>
                {count && (
                    <Tooltip
                      shiftX={6}
                        className={cls.tooltip}
                        placement="bottom-end"
                        message={
                            'На вашем тарифе вы можете хранить 20 файлов, чтобы добавлять новые файлы, повысьте тариф или удалите ненужное'
                        }
                    >
                        <P font={'medium'} className={cls.count}>{count}</P>
                    </Tooltip>
                )}{' '}
            </div>
        </div>
    );
};
