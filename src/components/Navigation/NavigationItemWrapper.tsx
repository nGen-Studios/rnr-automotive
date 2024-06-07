import NavigationItems from "./NavigationItems";
import BookingButton from "./BookingButton";

export default function NavigationItemWrapper() {
  return (
    <ul className="flex items-center justify-evenly">
      <NavigationItems className="tablet:hidden" />
      <li>
        <BookingButton />
      </li>
      <li>
        <button className="tablet:block hidden cursor-pointer tablet:mr-16 mobile:mr-4">
          <span className="h-[3px] w-8 bg-black block" />
          <span className="h-[3px] w-8 bg-black block my-2" />
          <span className="h-[3px] w-8 bg-black block" />
        </button>
      </li>
    </ul>
  );
}
