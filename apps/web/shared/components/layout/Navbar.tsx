import logo from "@shared/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";

const ACCENT_GREEN = "#1F8707";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "What We Do" },
  { href: "#gallery", label: "Gallery" }
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#000B3D] text-white" role="banner">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-[clamp(20px,5vw,56px)] py-3.5">
        <Link href="#top" className="flex items-center gap-2.5" aria-label="SharkCare Foundation, back to top">
          <span className="sc-image-hover shrink-0 rounded-md">
            <Image
              src={logo}
              alt="SharkCare Foundation"
              width={34}
              height={34}
              draggable={false}
              className="h-[34px] w-[34px] rounded-md object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="flex items-center gap-[clamp(16px,3vw,32px)]" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="sc-nav-link hidden sm:inline-block">
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="sc-cta sc-cta-solid inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: ACCENT_GREEN }}
          >
            Get Involved
          </Link>
        </nav>
      </div>
    </header>
  );
}
