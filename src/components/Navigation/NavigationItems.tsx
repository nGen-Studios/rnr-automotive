import { navigationData } from "./navigationData";
import Link from "next/link";

export default function NavigationItems() {
  return navigationData.map((nav) => (
    <Link
      href={nav.href}
      className="inline items-center mr-6 text-xl hover:scale-110"
    >
      {nav.name}
    </Link>
  ));
}
