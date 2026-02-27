import type { ReactNode } from 'react';

import cls from '@/features/UserMenu/ui/UserMenu.module.css';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown.tsx';
import { Line } from '@/shared/ui/Line/Line.tsx';

import ProfileSvg from '@icons/profile.svg?react';
import ExitSvg from '@icons/red-exit.svg?react';
import RocketSvg from '@icons/rocket.svg?react';
import SupportSvg from '@icons/support.svg?react';
import TokenSvg from '@icons/token.svg?react';

interface MenuProps {
    DropdownButton: ReactNode;
}

export const Menu = ({ DropdownButton }: MenuProps) => {
    return (
        <Dropdown
            dropdownClass={cls.dropdown}
            Button={DropdownButton}
            align={'center'}
            sideOffset={16}
            side={'top'}
        >
            <Button fontSize={'xs'} hSize={'sm'} variant={'ghost'} wFull>
                <ProfileSvg />
                Профиль
            </Button>
            <Button
                fontSize={'xs'}
                hSize={'sm'}
                variant={'ghost'}
                textColor={'success'}
                wFull
            >
                <TokenSvg />
                Купить токены
            </Button>
            <Button fontSize={'xs'} hSize={'sm'} variant={'ghost'} wFull>
                <SupportSvg />
                Помощь и FAQ
            </Button>
            <Button fontSize={'xs'} hSize={'sm'} variant={'ghost'} wFull>
                <RocketSvg />
                Что нового?
            </Button>
            <Line />
            <Button
                fontSize={'xs'}
                hSize={'sm'}
                variant={'ghost'}
                textColor={'cancel'}
                wFull
            >
                <ExitSvg />
                Выход
            </Button>
        </Dropdown>
    );
};
