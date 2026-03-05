import { Block } from '@/widgets/Block/Block.tsx';

import { EmptyBlock } from '@/shared/ui/EmptyBlock/EmptyBlock.tsx';

import VideoSvg from '@icons/video-2.svg?react';

import { Video } from './Video';
import cls from './Videos.module.css';

export interface Video {
    src: string;
}

interface VideosProps {
    videos: Video[];
}

export const Videos = ({ videos }: VideosProps) => {
    return (
        <Block>
            {videos.length > 0 ? (
                <div className={cls.videos}>
                    {videos.map((video, i) => (
                        <Video {...video} key={i} />
                    ))}
                </div>
            ) : (
                <EmptyBlock
                    title={'Пока ничего нет'}
                    text={
                        'Здесь будут храниться ваши сгенерированные картинки, видео и другие файлы.'
                    }
                    icon={<VideoSvg />}
                />
            )}
        </Block>
    );
};
