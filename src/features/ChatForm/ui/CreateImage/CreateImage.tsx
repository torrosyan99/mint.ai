import clsx from 'clsx';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';

import CloseSvg from '@icons/close.svg?react';
import ImageSvg from '@icons/gallery-edit.svg?react';
import SaleSquareSvg from '@icons/sale-square.svg?react';
import SmartphoneSvg from '@icons/smartphone.svg?react';
import StopSvg from '@icons/stop.svg?react';
import TableSvg from '@icons/tablet.svg?react';
import UnreadSvg from '@icons/unread.svg?react';

import cls from './CreateImage.module.css';

interface CreateImageProps {
    setShowCreateImage: (b: boolean) => void;
}

export const CreateImage = ({ setShowCreateImage }: CreateImageProps) => {
    const onCloseCreateImage = () => setShowCreateImage(false);
    const [isSizeActive, setIsSizeActive] = useState(false);
    const [isQualityActive, setIsQualityActive] = useState(false);
    const [isBgActive, setIsBgActive] = useState(false);
    return (
        <>
            <Button
                className={cls.cancel}
                variant="ghost"
                onClick={onCloseCreateImage}
                padding={'sm'}
                fontSize={'xs'}
            >
                <ImageSvg />
                Изображение
                <CloseSvg width={16} height={16} />
            </Button>

            <Dropdown
                isOpen={isSizeActive}
                setIsOpen={setIsSizeActive}
                align="start"
                sideOffset={8}
                dropdownClass={cls.dropdown}
                list
                Button={
                    <Button
                        className={clsx({ [cls.activeButton]: isSizeActive }, cls.button)}
                        variant={'ghost'}
                        padding={'sm'}
                        fontSize={'xs'}
                    >
                        <StopSvg />
                        1:1
                    </Button>
                }
            >
                <Button variant={'ghost'} fontSize={'xs'} wFull>
                    <StopSvg />
                    Квадратная (1024:1024)
                    <UnreadSvg className={cls.check} />
                </Button>
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <TableSvg />
                    Горизонтальная (1536:1024)
                </Button>
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SmartphoneSvg />
                    Вертикальная (1024:1536)
                </Button>
            </Dropdown>
            <Dropdown
                isOpen={isQualityActive}
                setIsOpen={setIsQualityActive}
                align="start"
                sideOffset={8}
                dropdownClass={cls.dropdown}
                list
                Button={
                    <Button
                        className={clsx({
                            [cls.activeButton]: isQualityActive,
                        }, cls.button)}
                        fontSize={'xs'}
                        variant={'ghost'}
                        padding={'sm'}
                    >
                        <SaleSquareSvg />
                        Авто
                    </Button>
                }
            >
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SaleSquareSvg />
                    Автоматическое качество
                    <UnreadSvg className={cls.check} />
                </Button>
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SaleSquareSvg />
                    Низкое качество
                </Button>
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SaleSquareSvg />
                    Среднее качество
                </Button>
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SaleSquareSvg />
                    Высокое качество
                </Button>
            </Dropdown>
            <Dropdown
                isOpen={isBgActive}
                setIsOpen={setIsBgActive}
                align="start"
                sideOffset={8}
                dropdownClass={cls.dropdown}
                list
                Button={
                    <Button
                        className={clsx({ [cls.activeButton]: isBgActive }, cls.button)}
                        variant={'ghost'}
                        padding={'sm'}
                        fontSize={'xs'}
                    >
                        <SaleSquareSvg />
                        Непрозрачный
                    </Button>
                }
            >
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SaleSquareSvg />
                    Непрозрачный фон
                    <UnreadSvg className={cls.check} />
                </Button>
                <Button  variant={'ghost'} fontSize={'xs'} wFull>
                    <SaleSquareSvg />
                    Прозрачный фон
                </Button>
            </Dropdown>
        </>
    );
};
