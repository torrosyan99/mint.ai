import clsx from 'clsx';
import { type SyntheticEvent, useState } from 'react';



import { Banner } from '@/features/ChatForm/ui/Baner/Banner.tsx';
import { Instruments } from '@/features/ChatForm/ui/Intruments/Instruments.tsx';



import type { AllFile } from "../../types";
import { Files } from '../Files/Files.tsx';
import cls from './ChatForm.module.css';
















interface ChatFormProps {
    className?: string;
    onSubmit?: (e: string) => void;
    banner?: boolean;
    files?: AllFile[];
}

export const ChatForm = ({
    className,
    onSubmit,
    banner,
    files = [],
}: ChatFormProps) => {
    const [text, setText] = useState('');
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit?.(text);
        setText('');
    };
    const [showBanner, setShowBanner] = useState(banner);
    return (
        <div
            className={clsx(cls.wrapper, className, {
                [cls.mt]: showBanner,
            })}
        >
            {showBanner && <Banner setShowBanner={setShowBanner} />}
            <form className={cls.chatForm} onSubmit={handleSubmit}>
                {files?.length > 0 && <Files files={files} />}
                <textarea
                    className={cls.textarea}
                    placeholder={'Введите сообщение ...'}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <Instruments text={text} />
            </form>
        </div>
    );
};
