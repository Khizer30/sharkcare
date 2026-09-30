export function AboutSection() {
  return (
    <section id="about" className="bg-[#FAFAF7]">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,112px)]">
        <div className="sc-about-grid grid grid-cols-1 items-start gap-[clamp(32px,6vw,72px)] min-[761px]:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#1F8707]">
              About Us
            </span>
            <h2 className="font-heading text-[clamp(28px,3.4vw,38px)] leading-[1.2] font-medium text-[#000B3D]">
              Business that gives back
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-[clamp(16px,1.5vw,18px)] leading-[1.75] text-[#33384A]">
            <p>
              SharkCare is the Corporate Social Responsibility project of the Shark Group of
              Companies, bringing together the purpose led efforts of SharkStack and SharkScale to
              support people and communities where help is needed most.
            </p>
            <p>
              We are committed to creating positive social impact through compassion, community
              support, outreach initiatives, and meaningful action.
            </p>
            <p>
              SharkCare reflects our belief that businesses should not only grow, but also give
              back, uplift lives, and contribute to a more caring and responsible future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
