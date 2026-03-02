import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import { KlingMotion } from '@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx';
import type { Message } from '@/widgets/Messages';

import { AI, selectAi } from '@/entities/ai';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';

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
  const ai = useAppSelector(selectAi);
  switch (ai) {
    case AI.gpt:
      return (
        <Gpt
          files={[
            {
              type: 'file',
              status: 'done',
              name:'Present_Azbuka_ar..zika.pdf'
            },
            {
              type: 'file',
              status: 'error',
              name:'My_Dokument_work.txt'
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
