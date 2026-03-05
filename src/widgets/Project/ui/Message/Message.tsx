import { useState } from 'react';

import chatgpt from '@/shared/assets/images/chatgpt-2.png';
import { P } from '@/shared/ui/P/P.tsx';

import CloseSvg from '@icons/close-2.svg?react';
import MessageSvg from '@icons/messages-2.svg?react';
import TrashBinSvg from '@icons/trash-bin-2.svg?react';
import UnreadSvg from '@icons/unread-2.svg?react';

import cls from './Message.module.css';

interface MessageProps {
    title: string;
    date: string;
}

export const Message = ({ title, date }: MessageProps) => {
    const [isFocused, setFocused] = useState(false);
    const [value, setValue] = useState(title);
    return (
        <div className={cls.message}>
            <img src={chatgpt} alt={'chatgpt'} />
            <div className={cls.wrapper}>
                <input
                    className={cls.input}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                <P className={cls.date} size={'xs'}>
                    {date}
                </P>
            </div>
            {isFocused ? (
                <div className={cls.focusedBlock}>
                    <button className={cls.button}>
                        <UnreadSvg />
                    </button>
                    <button className={cls.button}>
                        <CloseSvg width={16} height={16} />
                    </button>
                </div>
            ) : (
                <div className={cls.hoverBlock}>
                    <button className={cls.messagesButton}>
                        <MessageSvg width={20} height={20} />
                    </button>
                    <button className={cls.deleteButton}>
                        <TrashBinSvg width={20} height={20}/>
                    </button>
                </div>
            )}
        </div>
    );
};
