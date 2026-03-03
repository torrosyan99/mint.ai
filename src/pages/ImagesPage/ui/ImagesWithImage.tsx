import { Tabs } from '@/widgets/Tabs';
import {Images} from "@/widgets/Images";
import img from "@/shared/assets/images/img-2.png"
export const ImagesWithImage = () => {
  return (
    <>
      <Tabs count={"1/20"} />
      <Images  images={[{src:img}]}  />
    </>
  );
};
