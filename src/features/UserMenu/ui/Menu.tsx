import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import cls from '@/features/UserMenu/ui/UserMenu.module.css';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';
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

const buttonProps = {
    fontSize: 'xs',
    hSize: 'sm',
    variant: 'ghost',
    wFull: true,
} as const;

export const Menu = ({ DropdownButton }: MenuProps) => {
    return (
        <Dropdown
            dropdownClass={cls.dropdown}
            Button={DropdownButton}
            align={'center'}
            sideOffset={16}
            side={'top'}
        >
            <Button as={Link} to={PagePaths.PROFILE} {...buttonProps}>
                <ProfileSvg />
                Профиль
            </Button>
            <Button {...buttonProps} textColor={'success'}>
                <TokenSvg />
                Купить токены
            </Button>
            <Button {...buttonProps}>
                <SupportSvg />
                Помощь и FAQ
            </Button>
            <Button {...buttonProps}>
                <RocketSvg />
                Что нового?
            </Button>
            <Line />
            <Button {...buttonProps} textColor={'cancel'}>
                <ExitSvg />
                Выход
            </Button>
        </Dropdown>
    );
};
