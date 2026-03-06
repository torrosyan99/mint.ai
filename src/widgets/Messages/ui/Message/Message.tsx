import type { PropsWithChildren } from 'react';

import cls from './Message.module.css';

export const Message = ({ children }: PropsWithChildren) => {
    return <div className={cls.message}>{children}</div>;
};
