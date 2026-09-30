import Link from "next/link";

const ACCENT_GREEN = "#1F8707";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#000B3D] bg-[radial-gradient(ellipse_at_82%_30%,rgba(31,135,7,0.14),transparent_55%)]"
    >
      <div className="mx-auto flex max-w-[780px] flex-col items-center gap-[22px] px-[clamp(20px,5vw,56px)] py-[clamp(72px,10vw,120px)] text-center">
        <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#1F8707]">
          Get Involved
        </span>
        <h2 className="font-heading text-[clamp(28px,4vw,42px)] leading-[1.2] font-medium text-white">
          Let&apos;s do more, together.
        </h2>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-[rgba(245,245,242,0.75)]">
          Whether you represent an organisation, a school, or a community in need, we would love to
          hear from you.
        </p>
        <div className="pt-2">
          <Link
            href="#top"
            className="sc-cta sc-cta-solid inline-block rounded-full px-[30px] py-3.5 text-[15px] font-semibold text-white"
            style={{ background: ACCENT_GREEN }}
          >
            Back To Top
          </Link>
        </div>
      </div>
    </section>
  );
}
