import NavigationLogo from "../Navigation/NavigationLogo";
import FooterIcons from "./footerIcons";

export default function Footer() {
  return (
    <nav className="w-full bg-primary/[0.4] h-20 flex items-center justify-between">
      <NavigationLogo />
      <FooterIcons />
    </nav>
  );
}
