import logo from "@shared/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";

const ACCENT_GREEN = "#1F8707";

export function Hero() {
  return (
    <section className="sc-hero w-full bg-[#000B3D] text-white" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,56px)] pt-[clamp(64px,10vw,120px)] pb-[clamp(72px,10vw,120px)]">
        <div className="sc-hero-grid grid grid-cols-1 items-center gap-[clamp(32px,6vw,64px)] min-[761px]:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 flex flex-col gap-6">
            <span className="sc-hero-in text-[13px] font-bold uppercase tracking-[0.16em]" style={{ animationDelay: "0.05s", color: ACCENT_GREEN }}>
              SharkCare Foundation
            </span>
            <h1
              id="hero-heading"
              className="sc-hero-in font-heading text-[clamp(36px,5.2vw,58px)] leading-[1.08] font-medium text-white"
              style={{ animationDelay: "0.15s" }}
            >
              Growing responsibly.
              <br />
              <em className="font-heading text-[#1F8707] italic">Giving back generously.</em>
            </h1>
            <p
              className="sc-hero-in max-w-[480px] text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[rgba(245,245,242,0.78)]"
              style={{ animationDelay: "0.28s" }}
            >
              The corporate social responsibility initiative of the Shark Group of Companies, uniting SharkStack and SharkScale to support people and
              communities where help is needed most.
            </p>
            <div className="sc-hero-in flex flex-wrap gap-3.5 pt-2" style={{ animationDelay: "0.4s" }}>
              <Link
                href="#gallery"
                className="sc-cta sc-cta-solid inline-block rounded-full px-[26px] py-3.5 text-[15px] font-semibold text-white"
                style={{ background: ACCENT_GREEN }}
              >
                See Our Work
              </Link>
              <Link
                href="#contact"
                className="sc-cta sc-cta-ghost inline-block rounded-full border border-[rgba(245,245,242,0.35)] bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-[#F5F5F2]"
              >
                Get Involved
              </Link>
            </div>
          </div>
          <div className="sc-hero-art-wrap relative z-0 order-first flex w-full justify-center min-[761px]:order-none min-[761px]:w-auto">
            <div className="sc-image-hover sc-hero-art mx-auto w-fit rounded-3xl">
              <Image
                src={logo}
                alt="SharkCare Foundation logo"
                width={320}
                height={320}
                draggable={false}
                className="mx-auto block h-auto w-[min(220px,70vw)] rounded-3xl min-[761px]:w-[min(320px,70%)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
