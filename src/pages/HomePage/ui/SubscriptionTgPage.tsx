import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import type { Message } from '@/widgets/Messages';


import { HomepageBg } from '@/shared/ui/HomepageBg/HomepageBg.tsx';
import {SubscriptionTg} from "@/features/SubscriptionTg";

export const SubscriptionTgPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <HomepageBg />
      <SubscriptionTg isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Gpt messages={messages} setMessages={setMessages} />
    </>
  );
};
