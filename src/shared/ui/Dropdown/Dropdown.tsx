import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { Children, type PropsWithChildren, type ReactNode } from 'react';

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
    portal?: boolean;
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
    portal = true,
}: PropsWithChildren<DropdownProps>) => {
    const items = Children.toArray(children);
    const content = (
        <DropdownMenu.Content
            className={clsx(cls.dropdown, dropdownClass)}
            side={side}
            align={align}
            sideOffset={sideOffset}
        >
            {list
                ? items.map((item, index) => (
                      <DropdownMenu.Item key={index}>{item}</DropdownMenu.Item>
                  ))
                : children}
        </DropdownMenu.Content>
    );
    return (
        <DropdownMenu.Root  open={isOpen} onOpenChange={setIsOpen} >
            <DropdownMenu.Trigger asChild>{Button}</DropdownMenu.Trigger>

            {portal ? (
                <DropdownMenu.Portal>{content}</DropdownMenu.Portal>
            ) : (
                content
            )}
        </DropdownMenu.Root>
    );
};
