import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  DOOTHA_PROMOTIONS,
  HOME_MAIN_CONTENT_END,
  HOME_MAIN_CONTENT_START,
  HOME_MAIN_LABEL,
  HOME_MAIN_CONTENT1_BOLD,
  HOME_MAIN_CONTENT_2,
} from "../utils/appConstants";
import {FaWhatsapp } from "react-icons/fa6";
import CarouselView from "../ui/CarouselView";

function HomeMain() {
  return (
    <main className="w-scrren relative h-screen">
      <div className=" flex flex-col ">
        <div className="relative flex h-24  w-full items-center bg-secondary  p-2">
          <HiOutlineMenuAlt4 className="absolute right-6 float-right h-7 w-7 cursor-pointer" />
          <div className="absolute left-4 w-20 text-wrap ">
            <label className=" flex items-center gap-x-1 text-xl font-medium">
              {DOOTHA_PROMOTIONS}
            </label>
          </div>
        </div>
        <div className="flex px-4 pt-4  font-semibold">
          <div>
            <CarouselView />
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-balance font-mono text-2xl">
              {HOME_MAIN_LABEL}
            </h1>
            <p className="font-normal ">
              {HOME_MAIN_CONTENT_START}
              <span className="font-semibold">{HOME_MAIN_CONTENT1_BOLD}</span>{" "}
              {HOME_MAIN_CONTENT_END}
            </p>
            <p className="font-normal">{HOME_MAIN_CONTENT_2}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <FaWhatsapp className="h-12 w-12 rounded-full bg-constructive p-2 text-primary-foreground " />
      </div>
    </main>
  );
}
export default HomeMain;
