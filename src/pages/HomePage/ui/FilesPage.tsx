import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import type { Message } from '@/widgets/Messages';

export const FilesPage = () => {
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
                    type: 'file',
                    status: 'done',
                    name: 'Present_Azbuka_ar..zika.pdf',
                },
                {
                    type: 'file',
                    status: 'error',
                    name: 'My_Dokument_work.txt',
                },
            ]}
            messages={messages}
            setMessages={setMessages}
        />
    );
};
