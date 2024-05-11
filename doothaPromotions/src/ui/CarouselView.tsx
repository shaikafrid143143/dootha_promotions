import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../@/components/ui/carousel";
interface CarouselViewInterfaceInterface {
  dataArray: any[];
}
function CarouselView({ dataArray }: CarouselViewInterfaceInterface) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {dataArray?.map((item: any, index) => {
            return <CarouselItem key={index}></CarouselItem>;
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default CarouselView;
