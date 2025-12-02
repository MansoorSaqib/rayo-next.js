import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";

export default function FeaturesSection() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">
              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Premium <br />
                    3D Artwork
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      3D Art
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Premium Assets
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      High Graphics
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Digital Artwork
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Visual Design
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Every Knight is sculpted with high-resolution modeling and
                    detailed material work designed for collectors and creators.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-01.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-01.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Distinct
                    <br />
                    Color Identity
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Color
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Branding
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Visuals
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Identityile Apps
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    A curated set of signature colors gives the collection a
                    recognizable visual language across all Knights.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-02.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-02.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Elite
                    <br />
                    Texture Work
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">Texture</span>
                    <span className="tag tag-default tag-outline">Detail</span>
                    <span className="tag tag-default tag-outline">Elite</span>
                    <span className="tag tag-default tag-outline">Surface</span>
                  </div>
                  <p className="t-small-mobile">
                    Matte, chrome, glossy, worn, and signature materials elevate
                    the realism and presence of each Knight.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-03.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-03.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Growing
                    <br />
                    Creative Universe
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Innovation
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Ideas
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Growth
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Creative
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Digital Knights continues to expand through new visuals,
                    deeper lore, and future artistic expressions built around
                    the identity of the Knights.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-04.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
