export default function BookingButton({
  className,
  ...rest
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={
        "mr-20 bg-secondary p-3 px-4 rounded-full text-xl hover:scale-110 text-white tablet:mr-5 mobile:text-base"
      }
    >
      BOOK NOW
    </button>
  );
}
