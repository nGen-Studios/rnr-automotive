import NavigationItem from "./NavigationItem";
import NavigationLogo from "./NavigationLogo";

export default function NavigationPage() {
  return (
    <nav className="w-full h-16 flex items-center justify-between">
      <NavigationLogo />
      <NavigationItem />
    </nav>
  );
}
