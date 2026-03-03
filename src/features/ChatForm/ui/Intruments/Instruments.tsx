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
    return (
        <div className={cls.instruments}>
            <input type={'file'} ref={fileRef} hidden />
            <div className={cls.left}>
                <Tooltip
                    message={
                        !isMobile && (
                            <>
                                Можно прикрепить к сообщению <br /> не более 2
                                файлов
                            </>
                        )
                    }
                    offsetSize={9}
                    placement={'bottom'}
                >
                    <ButtonIcon
                        className={clsx(cls.add, { [cls.mb]: showCreateImage })}
                        size={'sm'}
                        radius={'full'}
                        variant={'ghost'}
                        type={'button'}
                        onClick={addClick}
                    >
                        <AddSvg />
                    </ButtonIcon>
                </Tooltip>
                {showCreateImage ? (
                    <CreateImage setShowCreateImage={setShowCreateImage} />
                ) : (
                    <InstrumentsButton
                        setShowCreateImage={setShowCreateImage}
                    />
                )}
            </div>
            <div className={cls.right}>
                <ButtonIcon
                    className={cls.microphone}
                    size={'lg'}
                    radius={'full'}
                    variant={'ghost'}
                    type={'button'}
                >
                    <MicrophoneSvg />
                </ButtonIcon>
                <ButtonIcon
                    className={clsx(cls.sendButton)}
                    as={'button'}
                    size={'none'}
                    radius={'full'}
                    variant={'none'}
                    disabled={text.length === 0}
                >
                    <ArrowUpSvg />
                </ButtonIcon>
            </div>
        </div>
    );
};
