import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Research", href: "#research" },
    { label: "Faculty", href: "#faculty" },
    { label: "News & Articles", href: "#news" },
  ];

  return (
    <header className="flex items-center justify-between w-full px-8 md:px-14" style={{ position: 'relative', zIndex: 50 }}>
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {navItems.map((item) => (
            <Link
              className="uppercase inline-block font-mono text-black hover:text-black/80 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-blue-600 hover:text-blue-800"
          href="https://mbzuai.ac.ae/admissions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </Link>
        <MobileMenu />
      </header>
  // ...existing code...
  );
};
