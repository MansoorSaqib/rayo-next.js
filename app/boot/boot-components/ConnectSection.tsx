import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function ConnectSection() {
  return (
    <div className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <RevealText as="h2" className="reveal-type anim-uni-in-up">
                    Join the Digital Knights movement.
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      Stay connected and follow our mission as the universe
                      continues to grow.
                    </p>
                    <div className="mxd-paragraph__controls anim-uni-in-up">
                      <div className="mxd-btngroup">
                        <AnimatedButton
                          text="Follow on X"
                          as={"a"}
                          className="btn btn-anim btn-default btn-accent slide-down"
                          //   href="#"
                        >
                          <i className="ph-bold ph-instagram-logo" />
                        </AnimatedButton>
                        <AnimatedButton
                          text="Join the Discord"
                          className="btn btn-anim btn-default btn-outline slide-right-up"
                          //   href={`/about-me`}
                        >
                          <i className="ph-bold ph-discord-logo" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with H2 Title and Paragraph End */}
      </div>
    </div>
  );
}
