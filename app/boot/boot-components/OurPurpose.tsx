import RevealText from "@/components/animation/RevealText";
import Image from "next/image";

export default function OurPurpose() {
  return (
    <div className="mxd-section">
      <div className="mxd-container no-padding-container">
        {/* Block - Features Promo Start */}
        <div className="mxd-block">
          <div className="mxd-features-promo">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* left side */}
                <div className="col-12 col-xl-5 mxd-features-promo__item">
                  <div className="mxd-container grid-container no-padding-right">
                    <div className="mxd-block mxd-grid-item no-margin">
                      <div className="mxd-features-promo__content">
                        <RevealText
                          as="h2"
                          className="mxd-pinned__title centered-mobile h2-small anim-uni-in-up reveal-type"
                        >
                          THE DIGITAL KNIGHTS PURPOSE
                        </RevealText>

                        <p className="anim-uni-in-up centered-mobile">
                          Digital Knights was built on the idea of identity,
                          creativity, and expression. The purpose of the project
                          is to bring visual storytelling, design culture, and
                          world-building together in a way that feels authentic
                          and meaningful. Through color families, armor styles,
                          and evolving visuals, the Knights represent
                          individuality inside an ever-growing digital
                          landscape. As the universe expands, the foundation
                          will always remain the same — bold design, strong
                          identity, and a commitment to standing out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right side (media) */}
                <div className="col-12 col-xl-7 mxd-features-promo__item">
                  <div className="mxd-features-promo__image anim-uni-in-up">
                    <Image
                      alt="Rayo Image"
                      width={1614}
                      height={800}
                      src="/img/demo/01_fea-img.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Features Promo End */}
      </div>
    </div>
  );
}
