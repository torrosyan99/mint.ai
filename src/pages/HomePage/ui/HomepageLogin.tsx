import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import { KlingMotion } from '@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx';
import type { Message } from '@/widgets/Messages';


import { AI, selectAi } from '@/entities/ai';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';
import { HomepageBg } from '@/shared/ui/HomepageBg/HomepageBg.tsx';
import {LogReg} from "@/features/LogReg/ui/LogReg/LogReg.tsx";

export const HomePageLogin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const ai = useAppSelector(selectAi);
  switch (ai) {
    case AI.gpt:
      return (
        <>
          <HomepageBg />
          <LogReg  isOpen={isOpen} onClose={() => setIsOpen(false)} />
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

