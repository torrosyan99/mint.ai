import bg from '@/shared/assets/images/homepagebg.png';

import cls from './HomepageBg.module.css';

export const HomepageBg = () => {
    return <img className={cls.bg} src={bg} alt={'bg'} />;
};
