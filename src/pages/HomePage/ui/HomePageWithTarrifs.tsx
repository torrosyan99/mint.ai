import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import type { Message } from '@/widgets/Messages';
import { Tarrifs } from '@/widgets/Tariffs/ui/Tarrifs.tsx';



const HomePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

      return (
        <>
          <Gpt messages={messages} setMessages={setMessages} />
          <Tarrifs />
        </>
      );
};

export default HomePage;
