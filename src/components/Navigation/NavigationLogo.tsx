import { twMerge } from "tailwind-merge";
import Image from "next/image";
import logo from "@/public/logo/logo.png";

export default function NavigationLogo({
  className,
  ...rest
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <Image
      className={twMerge("ml-12 tablet:ml-12 mobile:ml-5", className)}
      src={logo}
      alt="website logo"
      width={110}
      height={110}
    />
  );
}
