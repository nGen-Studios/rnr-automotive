import Image from "next/image";

import { serviceItemData } from "./serviceData";
import BookingButton from "../Navigation/BookingButton";

export default function ServiceItems() {
  return (
    <>
      {serviceItemData.map((serviceItem, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center pb-10 border-secondary border-4 w-full overflow-hidden rounded-3xl shadow-xl max-w-[620px]"
        >
          <h3 className="text-white text-center w-full bg-secondary text-3xl p-1 tablet:text-4xl tablet:py-5 ">
            {serviceItem.name}
          </h3>
          <div className="w-full h-full bg-gray-50 flex items-center justify-center mb-10">
            <Image
              className="m-auto"
              src={serviceItem.image}
              alt={serviceItem.name}
              width={180}
              height={180}
            />
          </div>
          <ul className="w-full pl-10 pb-3 text-xl tablet:text-3xl mobile:text-xl">
            {serviceItem.lists.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <BookingButton className="mr-0 mt-5 tablet:text-3xl tablet:p-5 mobile:text-xl" />
        </div>
      ))}
    </>
  );
}
