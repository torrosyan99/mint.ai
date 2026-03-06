import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import type { Message } from '@/widgets/Messages';

export const SendingPage = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            message: 'Расскажи про реверсивную психологию',
            type: 'send',
        },
    ]);

    return <Gpt sending messages={messages} setMessages={setMessages} />;
};
