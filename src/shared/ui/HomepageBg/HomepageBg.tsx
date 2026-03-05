import cls from './HomepageBg.module.css'
import bg from "@/shared/assets/images/homepagebg.png"
export const HomepageBg = () => {
  return (
    <img className={cls.bg}  src={bg} alt={'bg'}/>
  );
};
