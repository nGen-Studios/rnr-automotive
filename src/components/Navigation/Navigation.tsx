import NavigationItemWrapper from "./NavigationItemWrapper";
import NavigationLogo from "./NavigationLogo";

export default function Navigation() {
  return (
    <nav className="w-full h-16 flex items-center justify-between">
      <NavigationLogo />
      <NavigationItemWrapper />
    </nav>
  );
}
