import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import type { Message } from '@/widgets/Messages';

import { LogReg } from '@/features/LogReg/ui/LogReg/LogReg.tsx';

import { HomepageBg } from '@/shared/ui/HomepageBg/HomepageBg.tsx';

export const HomePageLogin = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <HomepageBg />
            <LogReg isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <Gpt messages={messages} setMessages={setMessages} />
        </>
    );
};
