import Image from "next/image";

import { columns } from "./column";
import BookingButton from "../Navigation/BookingButton";

export default function ColumnItem() {
  return (
    <>
      {columns.map((column) => (
        <div className="flex flex-col items-center justify-center pb-10 border-secondary border-4 w-full overflow-hidden rounded-3xl shadow-xl">
          <h3 className="text-white text-center w-full bg-secondary text-3xl p-1">
            {column.name}
          </h3>
          <div className="w-full h-full bg-gray-50 flex items-center justify-center mb-10">
            <Image
              className="m-auto"
              src={column.image}
              alt={column.name}
              width={180}
              height={180}
            />
          </div>
          <ul className="w-full pl-10 pb-3 text-xl">
            {column.lists.map((list) => (
              <li>{list}</li>
            ))}
          </ul>
          <BookingButton className="mr-0 mt-5" />
        </div>
      ))}
    </>
  );
}
