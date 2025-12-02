import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerNavData = [
    {
      title: "Start pages",
      links: [
        { label: "Main home", href: "/home-main" },
        {
          label: "Software development company",
          href: "/home-software-development-company",
        },
        { label: "Freelancer portfolio", href: "/home-freelancer-portfolio" },
        { label: "Digital agency", href: "/home-digital-agency" },
        {
          label: "Creative design studio",
          href: "/home-creative-design-studio",
        },
        { label: "Personal portfolio", href: "/home-personal-portfolio" },
        { label: "Web agency", href: "/home-web-agency" },
        { label: "Creative developer", href: "/home-creative-developer" },
        { label: "Designer", href: "/home-designer" },
      ],
    },
    {
      // Combined column: Portfolio + Insights Pages
      groups: [
        {
          title: "Portfolio",
          links: [
            { label: "Works simple", href: "/works-simple" },
            { label: "Works masonry", href: "/works-masonry" },
            { label: "Project details", href: "/project-details" },
          ],
        },
        {
          title: "Insights pages",
          links: [
            { label: "Blog standard", href: "/blog-standard" },
            { label: "Blog creative", href: "/blog-creative" },
            { label: "Single post", href: "/blog-article" },
          ],
        },
      ],
    },
    {
      title: "Inner pages",
      links: [
        { label: "About me", href: "/about-me" },
        { label: "About us", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Our team", href: "/team" },
        { label: "Pricing plans", href: "/pricing" },
        { label: "Frequently asked questions", href: "/faq" },
        { label: "404 error page", href: "/404" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="mxd-demo-footer">
      {/* Footer Background Start */}
      <div className="mxd-demo-footer__bg">
        <Image
          alt="Rayo Image"
          width={1920}
          height={580}
          src="/img/demo/01-footer.webp"
        />
      </div>
      {/* Footer Background End */}
      {/* Footer Container Start */}
      <div className="mxd-container grid-container">
        {/* Footer Block - Content Block Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__logo anim-uni-in-up">
                  <a href="#" className="mxd-logo">
                    {/* logo icon */}
                    <svg
                      className="mxd-logo__image"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56 56"
                      enableBackground={"new 0 0 56 56"}
                      xmlSpace="preserve"
                    >
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                        .mxd-logo__bg {\n                          fill: var(--base-opp);\n                        }\n                        .mxd-logo__cat {\n                          clip-path: url(#mxd-logo__id-2);\n                          fill: var(--base);\n                        }\n                      ",
                        }}
                      />
                      <path
                        className="mxd-logo__bg"
                        d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
                      />
                      <g>
                        <defs>
                          <path
                            id="mxd-logo__clippath-2"
                            d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z"
                          />
                        </defs>
                        <clipPath id="mxd-logo__id-2">
                          <use
                            xlinkHref="#mxd-logo__clippath-2"
                            style={{ overflow: "visible" }}
                          />
                        </clipPath>
                        <path
                          className="mxd-logo__cat"
                          d="M33.6,34.5h0.9
                    c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3
                    v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3L20.5,37.3z
                    M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z
                    M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z
                    M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28L28,26.1
                    z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z
                    M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z
                    M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1
                    L14,26.1z M11.2,34.5v1.9c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9
                    V42c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V56
                    c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9h3.7c0.5,0,0.9-0.4,0.9-0.9v-0.9
                    c0-0.5-0.4-0.9-0.9-0.9h-3.7c-0.5,0-0.9-0.4-0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9
                    h-0.9c-0.5,0-0.9,0.4-0.9,0.9L11.2,34.5L11.2,34.5z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5
                    c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1L42,26.1z M49.5,39.2v-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.8
                    c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v3.7c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9,0.4,0.9,0.9
                    v6.5c0,0.5-0.4,0.9-0.9,0.9h-3.7c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9,0.4,0.9,0.9V56
                    c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-9.3c0-0.5,0.4-0.9,0.9-0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9
                    c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C49,40.1,49.5,39.7,49.5,39.2L49.5,39.2z"
                        />
                      </g>
                    </svg>
                    {/* logo text */}
                    <span className="mxd-logo__text">
                      Digital
                      <br />
                      Knights
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-demo-footer__item">
                <nav className="mxd-demo-footer__nav">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {footerNavData.map((section, index) => (
                        <div
                          key={index}
                          className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item"
                        >
                          {/* Check if this section contains grouped blocks */}
                          {section.groups ? (
                            section.groups.map((group, gIndex) => (
                              <div
                                key={gIndex}
                                className="mxd-footer-nav__block"
                              >
                                <div className="mxd-footer-nav__title anim-uni-in-up">
                                  <p className="t-140 t-bright t-caption">
                                    {group.title}
                                  </p>
                                </div>
                                <div className="mxd-footer-nav__list">
                                  <ul>
                                    {group.links.map((link, lIndex) => (
                                      <li key={lIndex}>
                                        <Link
                                          className="anim-uni-in-up"
                                          href={link.href}
                                          target="_blank"
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="mxd-footer-nav__block">
                              <div className="mxd-footer-nav__title anim-uni-in-up">
                                <p className="t-140 t-bright t-caption">
                                  {section.title}
                                </p>
                              </div>
                              <div className="mxd-footer-nav__list">
                                <ul>
                                  {section.links.map((link, lIndex) => (
                                    <li key={lIndex}>
                                      <Link
                                        className="anim-uni-in-up"
                                        href={link.href}
                                        target="_blank"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__promo">
                  <div className="mxd-footer-promo__title anim-uni-in-up">
                    <p className="t-140 t-bright t-caption">
                      More by ib-themes:
                    </p>
                  </div>
                  <div className="mxd-footer-promo__list">
                    <a
                      className="mxd-footer-promo__item"
                      href="https://themeforest.net/item/resonance-multipurpose-onemulti-page-react-nextjs-template/53612924"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Blayden - Personal Portfolio & Resume React Nextjs Template"
                        width={180}
                        height={180}
                        src="/img/demo/icon-blayden.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Resonance - Multipurpose Creative NextJs Templates
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-template/51340309"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Ignite - Portfolio and Landing Page Template"
                        width={180}
                        height={180}
                        src="/img/demo/icon-ignite.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Sandbox - Tailwind CSS Modern & Multipurpose Template
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://themeforest.net/item/gotrip-travel-tour-online-booking-nextjs-template/44047013"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Braxton - Personal Portfolio & Resume React Nextjs Template"
                        width={500}
                        height={500}
                        src="/img/demo/icon-braxton.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        GoTrip - Travel & Tour Agency React NextJs Template
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
