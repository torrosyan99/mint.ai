import cls from './Navigation.module.css'
import {NavigationButton} from "@/widgets/Sidebar/ui/Navigation/NavigationButton.tsx";
import type {SidebarComponentProps} from "../../types";
import FieldSvg from "@icons/field.svg?react"
import DocumentSvg from "@icons/document.svg?react"
import ImageSvg from "@icons/image.svg?react"
import VideoSvg from "@icons/video.svg?react"
import AudioSvg from "@icons/audio.svg?react"


export const Navigation = ({isCompact}: SidebarComponentProps) => {
  return (
    <div className={cls.navigation}>
      <NavigationButton className={cls.topButton} to={'ns-1'}  icon={<FieldSvg />} isCompact={isCompact}>
        Проекты
      </NavigationButton>
      <NavigationButton to={'ns-2'} icon={<DocumentSvg />}  isCompact={isCompact}>
        Документы
      </NavigationButton>
      <NavigationButton to={'ns-3'} icon={<ImageSvg />}  isCompact={isCompact}>
        Изображения
      </NavigationButton>
      <NavigationButton to={'ns-4'} icon={<VideoSvg />}  isCompact={isCompact}>
        Видео
      </NavigationButton>
      <NavigationButton to={'ns-5'} icon={<AudioSvg />}  isCompact={isCompact}>
        Аудио
      </NavigationButton>
    </div>
  );
};
