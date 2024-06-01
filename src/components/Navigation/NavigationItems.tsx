import { navigationData } from "./navigationData";

export default function NavigationItems() {
  return navigationData.map((nav) => (
    <li className="inline items-center mr-6">{nav.name}</li>
  ));
}
