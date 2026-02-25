import { HistoryButton } from '@/widgets/Sidebar/ui/History/HistoryButton.tsx';

import chatgpt from '@/shared/assets/images/chatgpt.png';

import GeminiSvg from '@icons/gemini.svg?react';

import cls from './History.module.css';

export const HistoryItems = () => {
    return (
            <div className={cls.items}>
                <HistoryButton
                    icon={<img src={chatgpt} alt={'chatgpt'} />}
                    buttonValue={'Вытащи из этой картинки элементы'}
                    unpinned
                />
                <HistoryButton
                    icon={<img src={chatgpt} alt={'chatgpt'} />}
                    buttonValue={'Вытащи из этой картинки элементы'}
                />
                <HistoryButton
                    icon={<GeminiSvg />}
                    buttonValue={'Сделай мне 4 иллюстрации'}
                />

                <HistoryButton
                    icon={<GeminiSvg />}
                    buttonValue={'Сделай мне 4 иллюстрации'}
                />
                <HistoryButton
                    icon={<GeminiSvg />}
                    buttonValue={'Сделай мне 4 иллюстрации'}
                />
                <HistoryButton
                    icon={<GeminiSvg />}
                    buttonValue={'Сделай мне 4 иллюстрации'}
                />
                <HistoryButton
                    icon={<GeminiSvg />}
                    buttonValue={'Сделай мне 4 иллюстрации'}
                />
                <HistoryButton
                    icon={<GeminiSvg />}
                    buttonValue={'Сделай мне 4 иллюстрации'}
                />
            </div>
    );
};
