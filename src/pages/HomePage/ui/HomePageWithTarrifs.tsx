import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import { KlingMotion } from '@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx';
import type { Message } from '@/widgets/Messages';
import { Tarrifs } from '@/widgets/Tariffs/ui/Tarrifs.tsx';

import { AI, selectAi } from '@/entities/ai';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';

const HomePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const ai = useAppSelector(selectAi);
  switch (ai) {
    case AI.gpt:
      return (
        <>
          <Gpt messages={messages} setMessages={setMessages} />

          <Tarrifs />
        </>
      );
    case AI.klingMotion:
      return (
        <KlingMotion messages={messages} setMessages={setMessages} />
      );
  }
};

export default HomePage;
