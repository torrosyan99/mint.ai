import { AI, selectAi } from '@/entities/ai';

import { useAppSelector } from '@/shared/hooks/useAppSelector.tsx';

import { Gpt } from '../Gpt/Gpt';
import { KlingMotion } from '../KlingMotion/KlingMotion.tsx';
import {messagesActions, selectMessages} from "@/entities/chat";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.tsx";
import {useEffect} from "react";

export const Chats = () => {
    const ai = useAppSelector(selectAi);
    const messages = useAppSelector(selectMessages);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(messages.length > 0) dispatch(messagesActions.resetMessages())
    }, [ai])
    switch (ai) {
        case AI.gpt:
            return <Gpt />;
        case AI.klingMotion:
            return <KlingMotion />;
    }
};
