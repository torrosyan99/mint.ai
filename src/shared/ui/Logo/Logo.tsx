import LogoSvg from '@icons/logo.svg?react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routesConfig/routesConfig.tsx';

import cls from './Logo.module.css';

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <Link className={clsx(cls.logo, [className])} to={PagePaths.HOME}>
            <LogoSvg />
            <span>Mint.AI</span>
        </Link>
    );
};
