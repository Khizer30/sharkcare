import logo from "@shared/assets/logo.webp";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#000B3D] text-[#F5F5F2]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-[clamp(40px,6vw,56px)]">
        <div className="flex items-center gap-2.5">
          <Image src={logo} alt="" width={28} height={28} draggable={false} className="h-7 w-7 rounded-md object-contain" />
          <div className="flex flex-col leading-snug">
            <span className="text-sm font-extrabold tracking-[0.04em]">SHARKCARE FOUNDATION</span>
            <span className="text-[12.5px] text-[rgba(245,245,242,0.55)]">A Shark Group of Companies CSR initiative</span>
          </div>
        </div>
        <div className="flex gap-5 text-[13.5px] text-[rgba(245,245,242,0.6)]">
          <a href="https://sharkstack.dev/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100 opacity-90">
            SharkStack
          </a>
          <a href="http://sharkscale.co/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100 opacity-90">
            SharkScale
          </a>
        </div>
        <span className="text-[12.5px] text-[rgba(245,245,242,0.45)]">Copyright 2026 SharkCare Foundation.</span>
      </div>
    </footer>
  );
}
