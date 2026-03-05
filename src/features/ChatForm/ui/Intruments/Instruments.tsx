import clsx from 'clsx';
import { useRef, useState } from 'react';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery.tsx';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import ArrowUpSvg from '@icons/arrow-up.svg?react';
import AddSvg from '@icons/chat-add.svg?react';
import MicrophoneSvg from '@icons/microphone.svg?react';

import { CreateImage } from '../CreateImage/CreateImage.tsx';
import cls from './Instruments.module.css';
import { InstrumentsButton } from './InstrumentsButton.tsx';

interface InstrumentsProps {
    text: string;
}

export const Instruments = ({ text }: InstrumentsProps) => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [showCreateImage, setShowCreateImage] = useState(false);
    const addClick = () => fileRef.current?.click();
    const isMobile = useMediaQuery('(max-width: 1280px)');

    const AddButton = (
        <ButtonIcon
            className={clsx(cls.add, {
                [cls.mb]: showCreateImage,
                [cls.hasText]: text.length > 0,
            })}
            size={'sm'}
            radius={'full'}
            type={'button'}
            onClick={addClick}
        >
            <AddSvg />
        </ButtonIcon>
    );
    return (
        <div className={cls.instruments}>
            <input type={'file'} ref={fileRef} hidden />
            <div className={cls.left}>
                {isMobile ? (
                    AddButton
                ) : (
                    <Tooltip
                        message={
                            <>
                                Можно прикрепить к сообщению <br /> не более 2
                                файлов
                            </>
                        }
                        offsetSize={9}
                        placement={'bottom'}
                    >
                        {AddButton}
                    </Tooltip>
                )}

                {showCreateImage ? (
                    <CreateImage setShowCreateImage={setShowCreateImage} />
                ) : (
                    <InstrumentsButton
                        text={text}
                        setShowCreateImage={setShowCreateImage}
                    />
                )}
            </div>
            <div className={cls.right}>
                <ButtonIcon
                    className={clsx(cls.microphone, {})}
                    size={'lg'}
                    radius={'full'}
                    type={'button'}
                >
                    <MicrophoneSvg />
                </ButtonIcon>
                <ButtonIcon
                    className={clsx(cls.sendButton)}
                    as={'button'}
                    size={'lg'}
                    radius={'full'}
                    disabled={text.length === 0}
                >
                    <ArrowUpSvg />
                </ButtonIcon>
            </div>
        </div>
    );
};
