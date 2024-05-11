import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,CarouselPrevious
} from "../../@/components/ui/carousel";
import { carouselViewPropsDataType } from "../types/homePageDataTypes";
interface CarouselViewInterfaceInterface {
  dataArray: carouselViewPropsDataType;
  autoPlay?:boolean,
  dots?:boolean,
  navigation?:boolean
}
function CarouselView({ dataArray }: CarouselViewInterfaceInterface) {
  return (
    <div>
      <Carousel className="w-full" 
      plugins={[
        
      ]}>
        <CarouselContent className="w-[100vw]">
          {dataArray?.map((item: any, index) => {
            return <CarouselItem key={index} className="">
              <div className="flex aspect-square items-center justify-center">
              <img src={item?.image} className="object-fill w-[100vw] h-[30vh]"/>
              </div>
            </CarouselItem>;
          })}
        </CarouselContent>
        
        {/* <CarouselPrevious/>
        <CarouselNext/> */}
      </Carousel>
    </div>
  );
}
export default CarouselView;
