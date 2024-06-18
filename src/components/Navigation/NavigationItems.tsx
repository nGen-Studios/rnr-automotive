import { navigationData } from "./navigationData";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function NavigationItems({
  className,
  ...rest
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <>
      {navigationData.map((nav) => (
        <Link
          key={nav.name}
          href={nav.href}
          className={twMerge(
            "inline items-center mr-6 text-xl hover:scale-110",
            className
          )}
        >
          {nav.name}
        </Link>
      ))}
    </>
  );
}
