import { twMerge } from "tailwind-merge";

export default function BookingButton({
  className,
  ...rest
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={twMerge(
        "mr-20 bg-secondary p-2 px-4 rounded-full text-xl hover:scale-110 text-white",
        className
      )}
    >
      Book now
    </button>
  );
}
