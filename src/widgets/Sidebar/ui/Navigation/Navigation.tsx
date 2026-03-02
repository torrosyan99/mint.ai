import { matchPath, useLocation } from 'react-router-dom';

import { NavigationButton } from '@/widgets/Sidebar/ui/Navigation/NavigationButton.tsx';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';

import AudioSvg from '@icons/audio.svg?react';
import DocumentSvg from '@icons/document.svg?react';
import FieldSvg from '@icons/field.svg?react';
import ImageSvg from '@icons/image.svg?react';
import VideoSvg from '@icons/video.svg?react';

import type { SidebarComponentProps } from '../../types';
import cls from './Navigation.module.css';

export const Navigation = ({ isCompact }: SidebarComponentProps) => {
    const { pathname } = useLocation();
    return (
        <div className={cls.navigation}>
            <NavigationButton
                className={cls.topButton}
                active={
                    !!matchPath(
                        { path: PagePaths.PROJECT, end: true },
                        pathname,
                    )
                }
                to={PagePaths.PROJECT}
                icon={<FieldSvg />}
                isCompact={isCompact}
            >
                Проекты
            </NavigationButton>
            <NavigationButton
                active={false}
                to={'ns-2'}
                icon={<DocumentSvg />}
                isCompact={isCompact}
            >
                Документы
            </NavigationButton>
            <NavigationButton
                active={false}
                to={'ns-3'}
                icon={<ImageSvg />}
                isCompact={isCompact}
            >
                Изображения
            </NavigationButton>
            <NavigationButton
                active={false}
                to={'ns-4'}
                icon={<VideoSvg />}
                isCompact={isCompact}
            >
                Видео
            </NavigationButton>
            <NavigationButton
                active={false}
                to={'ns-5'}
                icon={<AudioSvg />}
                isCompact={isCompact}
            >
                Аудио
            </NavigationButton>
        </div>
    );
};
