import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import SoundwaveSvg from '@icons/soundwave.svg?react';

import { Audio } from './Audio';
import cls from './Audio.module.css';

export interface Audio {
    title: string;
}

interface AudioSectionProps {
    audioItems: Audio[];
}

export const AudioSection = ({ audioItems }: AudioSectionProps) => {
    return (
        <Block>
            {audioItems.length > 0 ? (
                <div className={cls.items}>
                    {audioItems.map((audio, i) => (
                        <Audio {...audio} key={i} />
                    ))}
                </div>
            ) : (
                <EmptyBlock
                    title={'Пока ничего нет'}
                    text={
                        'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
                    }
                    icon={<SoundwaveSvg />}
                />
            )}
        </Block>
    );
};
