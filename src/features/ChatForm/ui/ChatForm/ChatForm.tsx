import clsx from 'clsx';
import {type FormEvent, useState} from 'react';

import { Button } from '@/shared/ui/Button/Button';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon.tsx';

import ArrowUpSvg from '@icons/arrow-up.svg?react';
import AddSvg from '@icons/chat-add.svg?react';
import InstrumentsSvg from '@icons/instruments.svg?react';
import MicrophoneSvg from '@icons/microphone.svg?react';

import cls from './ChatForm.module.css';

interface ChatFormProps {
    className?: string;
    onSubmit?: (e: string) => void;
    disabled?: boolean;
}

export const ChatForm = ({ className, onSubmit, disabled }: ChatFormProps) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit?.(text);
        setText('')
    }
    console.log(disabled, 'disabled')
    return (
        <form className={clsx(cls.chatForm, className)} onSubmit={handleSubmit}>
            <textarea
                className={cls.textarea}
                placeholder={'Введите сообщение ...'}
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className={cls.bottom}>
                <ButtonIcon size={'sm'} radius={'full'} variant={'ghost'} type={'button'}>
                    <AddSvg />
                </ButtonIcon>
                <Button
                    variant={'ghost'}
                    radius={'md'}
                    fontSize={'xs'}
                    hSize={'sm'}
                    type={'button'}
                >
                    <InstrumentsSvg />
                    Инструменты
                </Button>
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
                    size={'lg'}
                    radius={'full'}
                    variant={'none'}
                    disabled={text.length === 0 || disabled}
                >
                    <ArrowUpSvg />
                </ButtonIcon>
            </div>
        </form>
    );
};
