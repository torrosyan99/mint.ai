import { Button } from '@/shared/ui/Button/Button';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';

import AtomSvg from '@icons/atom.svg?react';
import GlobalSvg from '@icons/global.svg?react';
import InstrumentsSvg from '@icons/instruments.svg?react';
import LightBulbSvg from '@icons/lightbulb.svg?react';
import PaletteSvg from '@icons/pallete.svg?react';

import cls from './Instruments.module.css';

interface InstrumentsButtonProps {
    setShowCreateImage:(b: boolean) => void;
}

export const InstrumentsButton = ({setShowCreateImage}:InstrumentsButtonProps) => {
    const onShowCreateImage = () => setShowCreateImage(true);
    return (
        <Dropdown
            dropdownClass={cls.dropdown}
            list
            sideOffset={10}
            Button={
                <Button
                    variant={'ghost'}
                    radius={'md'}
                    fontSize={'xs'}
                    hSize={'sm'}
                    type={'button'}
                >
                    <InstrumentsSvg />
                    Инструменты
                </Button>
            }
        >
            <Button fontSize={'xs'} variant={'ghost'} wFull>
                <GlobalSvg />
                Поиск в сети
            </Button>
            <Button fontSize={'xs'} variant={'ghost'} wFull onClick={onShowCreateImage}>
                <PaletteSvg />
                Создать изображение
            </Button>
            <Button fontSize={'xs'} variant={'ghost'} wFull>
                <AtomSvg />
                Глубокое исследование{' '}
            </Button>
            <Button  fontSize={'xs'} variant={'ghost'} wFull>
                <LightBulbSvg />
                Думай дольше{' '}
            </Button>
        </Dropdown>
    );
};
