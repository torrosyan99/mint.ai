import clsx from 'clsx';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import ArrowBottomSvg from '@icons/arrow-bottom.svg?react';

import cls from './Sorting.module.css';

export const Sorting = () => {
    const [active, setActive] = useState<string>('Активность');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cls.sorting}>
            <P className={cls.title} size={'sm'}>
                Сортировка
            </P>
            <Dropdown
                dropdownClass={cls.dropdown}
                align={'start'}
                sideOffset={4}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                Button={
                    <Button
                        variant={'none'}
                        fontSize={'xs'}
                        hSize={'sm'}
                        className={clsx(cls.button, {
                            [cls.opened]: isOpen,
                        })}
                    >
                        {active}
                        <ArrowBottomSvg />
                    </Button>
                }
                list
            >
                <Button
                    fontSize={'xs'}
                    onClick={() => setActive('Активность')}
                    wFull
                    variant={'ghost'}
                    hSize={'sm'}
                >
                    Активность
                </Button>
                <Button
                    fontSize={'xs'}
                    onClick={() => setActive('Имя')}
                    variant={'ghost'}
                    hSize={'sm'}
                    wFull
                >
                    Имя
                </Button>
            </Dropdown>
        </div>
    );
};
