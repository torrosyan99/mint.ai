import { Gpt} from '@/widgets/Chats';
import {useState} from "react";
import type {Message} from "@/widgets/Messages";
import {useAppSelector} from "@/shared/hooks/useAppSelector.tsx";
import {AI, selectAi} from "@/entities/ai";
import {KlingMotion} from "@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx";

const HomePage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const ai = useAppSelector(selectAi)
    switch (ai) {
        case AI.gpt:
            return <Gpt messages={messages} setMessages={setMessages} />
        case AI.klingMotion:
            return <KlingMotion messages={messages} setMessages={setMessages} />
    }
};

export default HomePage;
