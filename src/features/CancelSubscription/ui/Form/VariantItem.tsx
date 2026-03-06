import cls from './Form.module.css'
import clsx from "clsx";
import {Radio} from "@/shared/ui/Radio/Radio.tsx";
interface VariantItemProps {
  active: boolean;
  value: string;
  setActiveVariant: (v:string)  => void;
}
export const VariantItem = ({active, value ,setActiveVariant}:VariantItemProps) => {
  const onClick = () => setActiveVariant(value);
  return (
    <div  className={clsx(cls.variant, {
      [cls.active]: active
    })} onClick={onClick}>
     <Radio active={active}  />
      {value}
    </div>
  );
};
