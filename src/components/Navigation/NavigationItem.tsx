import NavigationItems from "./NavigationItems";
import BookingButton from "./BookingButton";

export default function NavigationItem() {
  return (
    <ul className="flex items-center justify-evenly">
      <NavigationItems />
      <BookingButton />
    </ul>
  );
}
