import clsx from 'clsx';

import type { AppDispatch } from '@/app/store';

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

const buttonProps = {
    hSize: 'sm',
    variant: 'ghost',
} as const;

const options = (list: Themes, theme: Themes, dispatch: AppDispatch) => {
    return {
        className: clsx(cls.button, {
            [cls.active]: list === theme,
        }),
        onClick: () => {
            dispatch(themeActions.setTheme(theme));
        },
    };
};

export const ThemesExit = ({ isCompact }: SidebarComponentProps) => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (
        <div className={clsx(cls.wrapper, getIsCompactClass(isCompact, cls))}>
            <div className={cls.themes}>
                <Button
                    {...options(theme, Themes.DevicesLight, dispatch)}
                    {...buttonProps}
                >
                    <MonitorSvg />
                </Button>

                <Button
                    {...options(theme, Themes.Light, dispatch)}
                    {...buttonProps}
                >
                    <SunSvg />
                </Button>
                <Button
                    {...options(theme, Themes.Dark, dispatch)}
                    {...buttonProps}
                >
                    <MoonSvg />
                </Button>
            </div>
            <Button {...buttonProps} className={clsx(cls.button, cls.exit)}>
                <ExitSvg />
            </Button>
        </div>
    );
};
