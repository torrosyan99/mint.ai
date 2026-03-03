import { useLocation } from 'react-router-dom';

import { NavigationButton } from '@/widgets/Sidebar/ui/Navigation/NavigationButton.tsx';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
import { checkNavigation } from '@/shared/helpers';

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
                active={checkNavigation(PagePaths.PROJECTS, pathname)}
                to={PagePaths.PROJECTS}
                icon={<FieldSvg />}
                isCompact={isCompact}
            >
                Проекты
            </NavigationButton>
            <NavigationButton
                active={checkNavigation(PagePaths.DOCUMENTS, pathname)}
                to={PagePaths.DOCUMENTS}
                icon={<DocumentSvg />}
                isCompact={isCompact}
            >
                Документы
            </NavigationButton>
            <NavigationButton
                active={checkNavigation(PagePaths.IMAGES, pathname)}
                to={PagePaths.IMAGES}
                icon={<ImageSvg />}
                isCompact={isCompact}
            >
                Изображения
            </NavigationButton>
            <NavigationButton
                active={checkNavigation(PagePaths.VIDEOS, pathname)}
                to={PagePaths.VIDEOS}
                icon={<VideoSvg />}
                isCompact={isCompact}
            >
                Видео
            </NavigationButton>
            <NavigationButton
                active={checkNavigation(PagePaths.AUDIO, pathname)}
                to={PagePaths.AUDIO}
                icon={<AudioSvg />}
                isCompact={isCompact}
            >
                Аудио
            </NavigationButton>
        </div>
    );
};
