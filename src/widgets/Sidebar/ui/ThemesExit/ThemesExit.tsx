import clsx from 'clsx';

import { Themes, selectTheme, themeActions } from '@/entities/theme';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch.tsx';
import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import ExitSvg from '@icons/exit.svg?react';
import MonitorSvg from '@icons/monitor.svg?react';
import MoonSvg from '@icons/moon.svg?react';
import SunSvg from '@icons/sun.svg?react';

import { getIsCompactClass } from '../../helpers/getIsCompactClass.ts';
import type { SidebarComponentProps } from '../../types';
import cls from './ThemesExit.module.css';

export const ThemesExit = ({ isCompact }: SidebarComponentProps) => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (
        <div className={clsx(cls.wrapper, getIsCompactClass(isCompact, cls))}>
            <div className={cls.themes}>
                <Button className={cls.button} hSize={'sm'} variant={'ghost'}>
                    <MonitorSvg />
                </Button>

                <Button
                    className={clsx(cls.button, {
                        [cls.active]: theme === Themes.Light,
                    })}
                    variant={'ghost'}
                    hSize={'sm'}
                    onClick={() =>
                        dispatch(themeActions.setTheme(Themes.Light))
                    }
                >
                    <SunSvg />
                </Button>
                <Button
                    className={clsx(cls.button, {
                        [cls.active]: theme === Themes.Dark,
                    })}
                    variant={'ghost'}
                    hSize={'sm'}
                    onClick={() => dispatch(themeActions.setTheme(Themes.Dark))}
                >
                    <MoonSvg />
                </Button>
            </div>
            <button className={clsx(cls.button, cls.exit)}>
                <ExitSvg />
            </button>
        </div>
    );
};
