import RevealText from "@/components/animation/RevealText";
import Image from "next/image";

export default function AboutUs() {
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
                          What is Digital Knights
                        </RevealText>

                        <p className="anim-uni-in-up centered-mobile">
                          Digital Knights is a premium 3D collection shaped by
                          identity, color, and heroic design. Each Knight
                          carries its own visual story through a unified system
                          of color families, iconic materials, and clean sci-fi
                          aesthetics. The project blends collectible culture
                          with futuristic world-building, creating a style that
                          is bold, recognizable, and built to stand out.
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
