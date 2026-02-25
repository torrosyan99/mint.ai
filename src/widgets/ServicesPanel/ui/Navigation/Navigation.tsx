import clsx from 'clsx';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import AiIconsSvg from '@icons/ai-icons.svg?react';
import AudioSoundSvg from '@icons/audio-sound.svg?react';
import AudioVideoSvg from '@icons/audio-video.svg?react';
import CodeSquareSvg from '@icons/code-square.svg?react';
import CropSvg from '@icons/crop.svg?react';
import FindImageSvg from '@icons/find-image.svg?react';
import PenSvg from '@icons/pen.svg?react';
import PieChartSvg from '@icons/pie-chart.svg?react';
import PinCancelSvg from '@icons/pin-cancel-s.svg?react';
import PinSvg from '@icons/pin-s.svg?react';
import SearchSvg from '@icons/search.svg?react';

import { getIsCompactClass } from '../../helpers/getIsCompactClass.ts';
import cls from './Navigation.module.css';
import { NavigationButton } from './NavigationButton.tsx';

interface NavigationProps {
    isCompact: boolean;
}

export const Navigation = ({ isCompact }: NavigationProps) => {
    return (
        <div
            className={clsx(cls.navigation, getIsCompactClass(isCompact, cls))}
        >
            {!isCompact && (
                <P className={cls.title} font={'medium'}>
                    Сервисы
                </P>
            )}

            <div className={cls.list}>
                {isCompact && (
                    <Button className={cls.searchButton} variant={'none'} hSize={'sm'} center>
                        <SearchSvg />
                    </Button>
                )}
                <NavigationButton
                    icon={<CropSvg />}
                    buttonEnd={<PinSvg />}
                    isCompact={isCompact}
                    to={'p-1'}
                >
                    Создать пост
                </NavigationButton>
                <NavigationButton
                    icon={<CropSvg />}
                    buttonEnd={<PinCancelSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Создать пост
                </NavigationButton>
                <NavigationButton
                    icon={<PenSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Удалить водяной знак{' '}
                </NavigationButton>
                <NavigationButton
                    icon={<AudioSoundSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Перевести текст
                </NavigationButton>
                <NavigationButton
                    icon={<PieChartSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Анализ данных
                </NavigationButton>
                <NavigationButton
                    icon={<AudioVideoSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Создать видео
                </NavigationButton>
                <NavigationButton
                    icon={<FindImageSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Найти картинку
                </NavigationButton>
                <NavigationButton
                    icon={<CodeSquareSvg />}
                    isCompact={isCompact}
                    to={'p-3'}
                >
                    Поиск в Интернете
                </NavigationButton>
                {!isCompact && (
                    <Button fontSize={'xs'} wFull center>
                        <AiIconsSvg />
                        Все AI сервисы
                    </Button>
                )}
            </div>
        </div>
    );
};
