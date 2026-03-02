import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import { KlingMotion } from '@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx';
import type { Message } from '@/widgets/Messages';

import { AI, selectAi } from '@/entities/ai';

import img from '@/shared/assets/images/img.png';
import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';

export const ErrorsImagePage = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            message: 'Расскажи про реверсивную психологию',
            type: 'send',
        },
        {
            type: 'answer',
            status: 'no-subscription',
        },
    ]);
    const ai = useAppSelector(selectAi);
    switch (ai) {
        case AI.gpt:
            return (
                <Gpt
                    files={[
                        {
                            type: 'image',
                            status: 'waiting',
                        },
                        {
                            type: 'image',
                            status: 'waiting',
                        },
                        {
                            type: 'image',
                            status: 'done',
                            src: img,
                        },
                    ]}
                    messages={messages}
                    setMessages={setMessages}
                />
            );
        case AI.klingMotion:
            return (
                <KlingMotion messages={messages} setMessages={setMessages} />
            );
    }
};
