import { Gpt} from '@/widgets/Chats';
import {useState} from "react";
import type {Message} from "@/widgets/Messages";
import {useAppSelector} from "@/shared/hooks/useAppSelector.tsx";
import {AI, selectAi} from "@/entities/ai";
import {KlingMotion} from "@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx";

export const SendingPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      message:'Расскажи про реверсивную психологию',
      type:'send'
    }
  ]);
  const ai = useAppSelector(selectAi)
  switch (ai) {
    case AI.gpt:
      return <Gpt sending messages={messages} setMessages={setMessages} />
    case AI.klingMotion:
      return <KlingMotion sending messages={messages} setMessages={setMessages} />
  }
};

