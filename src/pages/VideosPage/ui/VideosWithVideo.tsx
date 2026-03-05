import { Tabs } from '@/widgets/Tabs';
import { Videos } from '@/widgets/Videos';

import img from '@/shared/assets/images/img-2.png';

export const VideosWithVideo = () => {
    return (
        <>
            <Tabs />
            <Videos
                videos={[
                    {
                        src: img,
                    },
                ]}
            />
        </>
    );
};
