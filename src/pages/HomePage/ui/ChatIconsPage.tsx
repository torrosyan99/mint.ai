import { useState } from 'react';

import { Gpt } from '@/widgets/Chats';
import { KlingMotion } from '@/widgets/Chats/ui/KlingMotion/KlingMotion.tsx';
import type { Message } from '@/widgets/Messages';

import { AI, selectAi } from '@/entities/ai';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';

export const ChatIconsPage = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            message: 'Расскажи про реверсивную психологию',
            type: 'send',
        },
        {
            type: 'answer',
            status: 'done',
            message:
                'Реверсивная психология (иногда говорят «психология наоборот») — это способ влияния, при котором человеку предлагают или демонстрируют вариант, противоположный тому, которого на самом деле хотят добиться, рассчитывая, что он выберет «назло», «вопреки» или из стремления сохранить самостоятельность.\n' +
                'название текста\n' +
                'В чём суть Идея простая:\n' +
                'Реактивность (сопротивление ограничениям)\n' +
                'Если человек сопротивляется прямым просьбам, ему дают ощущение выбора или даже «запрет».\n' +
                'В ответ он может сделать как раз то, что «нельзя» или «не надо», чтобы доказать свою независимость.\n' +
                'Почему это иногда работает (психологические механизмы) 2.1) Реактивность (сопротивление ограничениям) Когда свободу выбора ограничивают (или кажется, что ограничивают), возникает внутренний протест: «Я сам решаю». Тогда человек делает наоборот, чтобы вернуть контроль.\n' +
                '2.2) Потребность в автономии и статусе',
        },
    ]);
    const ai = useAppSelector(selectAi);
    switch (ai) {
        case AI.gpt:
            return <Gpt messages={messages} setMessages={setMessages} />;
        case AI.klingMotion:
            return (
                <KlingMotion messages={messages} setMessages={setMessages} />
            );
    }
};
