import { twMerge } from "tailwind-merge";

export default function BookingButton({
  className,
  children,
  ...rest
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={twMerge(
        "mr-20 bg-secondary p-3 px-4 rounded-full text-xl hover:scale-110 text-white tablet:mr-5 mobile:text-base",
        className
      )}
    >
      {children ? children : `BOOK NOW`}
    </button>
  );
}
