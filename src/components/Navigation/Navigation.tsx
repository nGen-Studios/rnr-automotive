import NavigationItemWrapper from "./NavigationItemWrapper";
import NavigationLogo from "./NavigationLogo";

export default function Navigation() {
  return (
    <nav className="w-full h-16 flex items-center justify-between absolute top-0 left-0 z-10 text-white">
      <NavigationLogo />
      <NavigationItemWrapper />
    </nav>
  );
}
