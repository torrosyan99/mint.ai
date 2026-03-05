import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import { KlingMotion } from '@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx';
import type { Message } from '@/widgets/Messages';

import { Notification } from '@/features/Notification';

import { AI, selectAi } from '@/entities/ai';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { HomepageBg } from '@/shared/ui/HomepageBg/HomepageBg.tsx';

const HomePage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const ai = useAppSelector(selectAi);
    switch (ai) {
        case AI.gpt:
            return (
                <>
                    <HomepageBg />
                    <Notification />
                    <Gpt messages={messages} setMessages={setMessages} />
                </>
            );
        case AI.klingMotion:
            return (
                <>
                    <HomepageBg />
                    <KlingMotion
                        messages={messages}
                        setMessages={setMessages}
                    />
                </>
            );
    }
};

export default HomePage;
