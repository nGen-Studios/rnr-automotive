import Image from "next/image";
import logo from "@/public/logo/logo.png";

export default function NavigationLogo() {
  return (
    <Image
      className="ml-12 tablet:ml-12 mobile:ml-5"
      src={logo}
      alt="website logo"
      width={110}
      height={110}
    />
  );
}
