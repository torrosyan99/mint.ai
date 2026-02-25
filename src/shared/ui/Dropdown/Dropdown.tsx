import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {Children, type PropsWithChildren, type ReactNode} from 'react';
import type {
  DropdownMenuContentProps
} from '@radix-ui/react-dropdown-menu'
import cls from './Dropdown.module.css';
import clsx from "clsx";

interface DropdownProps {
  Button: ReactNode;
  side?: DropdownMenuContentProps['side'],
  align?: DropdownMenuContentProps['align'],
  sideOffset?: DropdownMenuContentProps['sideOffset'],
  opened?: boolean,
  setOpened?: (isOpen: boolean) => void,
  dropdownClass?:string
}


export const Dropdown = ({
                           children,
                           Button,
                           sideOffset,
                           align,
                           side,
                           opened,
                           setOpened,
                           dropdownClass
                         }: PropsWithChildren<DropdownProps>) => {
  const items = Children.toArray(children);
  return <DropdownMenu.Root open={opened} onOpenChange={setOpened}>
    <DropdownMenu.Trigger asChild>{Button}</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className={clsx(cls.dropdown, dropdownClass)}
        side={side}
        align={align}
        sideOffset={sideOffset}

      >
        {items.map((item, index) => (
          <DropdownMenu.Item key={index}>
            {item}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>

};
