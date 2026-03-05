import clsx from 'clsx';

import { Button } from '@/shared/ui/Button/Button';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';

import AtomSvg from '@icons/atom.svg?react';
import GlobalSvg from '@icons/global.svg?react';
import InstrumentsSvg from '@icons/instruments.svg?react';
import LightBulbSvg from '@icons/lightbulb.svg?react';
import PaletteSvg from '@icons/pallete.svg?react';

import cls from './Instruments.module.css';

interface InstrumentsButtonProps {
    setShowCreateImage: (b: boolean) => void;
    text: string;
}

const buttonProps = {
    font: 'regular',
    fontSize: 'xs',
    variant: 'ghost',
    wFull: true,
} as const;
export const InstrumentsButton = ({
    setShowCreateImage,
    text,
}: InstrumentsButtonProps) => {
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
                    font={'regular'}
                    padding={'sm'}
                    className={clsx(cls.instrumentsButton, {
                        [cls.hasText]: text.length > 0,
                    })}
                >
                    <InstrumentsSvg />
                    Инструменты
                </Button>
            }
        >
            <Button {...buttonProps}>
                <GlobalSvg width={20} height={20} />
                Поиск в сети
            </Button>
            <Button {...buttonProps} onClick={onShowCreateImage}>
                <PaletteSvg />
                Создать изображение
            </Button>
            <Button {...buttonProps}>
                <AtomSvg />
                Глубокое исследование{' '}
            </Button>
            <Button {...buttonProps}>
                <LightBulbSvg />
                Думай дольше{' '}
            </Button>
        </Dropdown>
    );
};
