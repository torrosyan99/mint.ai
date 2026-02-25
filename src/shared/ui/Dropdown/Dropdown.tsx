import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import {
    Children,
    type PropsWithChildren,
    type ReactNode,
} from 'react';

import cls from './Dropdown.module.css';

interface DropdownProps {
    Button: ReactNode;
    side?: DropdownMenuContentProps['side'];
    align?: DropdownMenuContentProps['align'];
    sideOffset?: DropdownMenuContentProps['sideOffset'];
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    dropdownClass?: string;
    list?: boolean;
}

export const Dropdown = ({
    children,
    Button,
    sideOffset,
    align,
    side,
    isOpen,
    setIsOpen,
    dropdownClass,
    list,
}: PropsWithChildren<DropdownProps>) => {
    const items = Children.toArray(children);
    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger  asChild>
                {Button}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={clsx(cls.dropdown, dropdownClass)}
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                >
                    {list
                        ? items.map((item, index) => (
                              <DropdownMenu.Item key={index}>
                                  {item}
                              </DropdownMenu.Item>
                          ))
                        : children}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
