import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import type { Message } from '@/widgets/Messages';


import img from '@/shared/assets/images/img.png';

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
};
