import { type HTMLAttributes, type ReactNode, useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import CountSvg from '@icons/count-icon.svg?react';
import PinCancelSvg from '@icons/pin-cancel.svg?react';
import PinSvg from '@icons/pin.svg?react';

import cls from './AiButton.module.css';

interface AiButtonProps extends HTMLAttributes<HTMLDivElement> {
    unpinned?: boolean;
    icon: ReactNode;
    title: string;
    text: string;
    count: number;
}

export const AiButton = ({
    icon,
    title,
    text,
    count,
    unpinned,
    ...others
}: AiButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (
        <>
            <Button
                className={cls.button}
                radius={'sm'}
                hSize={'none'}
                padding={'none'}
                variant="primary"
                as={'div'}
                wFull
                {...others}
            >
                {icon}
                <div className={cls.info}>
                    <P className={cls.title} font={'medium'}>
                        {title}
                    </P>
                    <P className={cls.text} size={'xs'}>
                        {text}
                    </P>
                </div>
                <div className={cls.count}>
                    <CountSvg />
                    {count}
                </div>
                <Tooltip
                    message={unpinned ? 'Открепить' : 'Закрепить'}
                    placement={'top'}
                    offsetSize={3.83}
                >
                    <ButtonIcon
                        className={cls.pinButton}
                        size={'sm-compact'}
                        radius={'sm'}
                        onClick={onOpen}
                    >
                        {unpinned ? (
                            <PinCancelSvg
                                className={cls.pinCancel}
                                width={16}
                                height={16}
                            />
                        ) : (
                            <PinSvg
                                className={cls.pin}
                                width={16}
                                height={16}
                            />
                        )}
                    </ButtonIcon>
                </Tooltip>
            </Button>
            <Modal
                className={cls.modal}
                isOpen={isOpen}
                onClose={onClose}
                bodyOverflow={false}
            >
                <P className={cls.modalTitle} size={'lg'} font={'medium'}>
                    {unpinned
                        ? 'Удалить из избранного?'
                        : 'Добавить в избранное?'}
                </P>

                <div className={cls.modalFlex}>
                    <Button
                        className={cls.modalButton}
                        hSize={'none'}
                        variant={'primary'}
                        onClick={onClose}
                        padding={'md'}
                        radius={'sm'}
                        fontSize={'xs'}
                    >
                        Отмена
                    </Button>
                    <Button
                        className={cls.modalButton}
                        onClick={onClose}
                        padding={'md'}
                        hSize={'none'}
                        radius={'sm'}
                        fontSize={'xs'}
                        variant={unpinned ? 'cancel' : 'dark'}
                    >
                        {unpinned ? 'Удалить' : 'Добавить'}
                    </Button>
                </div>
            </Modal>
        </>
    );
};
