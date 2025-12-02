// import RevealText from "@/components/animation/RevealText";
// import Image from "next/image";

// export default function FoundersMessage() {
//   return (
//     <div className="mxd-section">
//       <div className="mxd-container no-padding-container">
//         {/* Block - Features Promo Start */}
//         <div className="mxd-block">
//           <div className="mxd-features-promo">
//             <div className="container-fluid p-0">
//               <div className="row g-0">
//                 {/* left side */}
//                 <div className="col-12 col-xl-5 mxd-features-promo__item">
//                   <div className="mxd-container grid-container no-padding-right">
//                     <div className="mxd-block mxd-grid-item no-margin">
//                       <div className="mxd-features-promo__content">
//                         <RevealText
//                           as="h2"
//                           className="mxd-pinned__title centered-mobile h2-small anim-uni-in-up reveal-type"
//                         >
//                           A Message from the Founder
//                         </RevealText>

//                         <p className="anim-uni-in-up centered-mobile">
//                           Digital Knights was created from the belief that
//                           identity matters. Every color, every texture, and
//                           every design choice represents intention and craft.
//                           This project is built on vision, resilience, and the
//                           passion to create something that lasts. Thank you for
//                           being part of the journey and for standing with us as
//                           we continue shaping the world of Digital Knights.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* right side (media) */}
//                 <div className="col-12 col-xl-7 mxd-features-promo__item">
//                   <div className="mxd-features-promo__image anim-uni-in-up">
//                     <Image
//                       alt="Rayo Image"
//                       width={1614}
//                       height={800}
//                       src="/img/demo/01_fea-img.webp"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Block - Features Promo End */}
//       </div>
//     </div>
//   );
// }

import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function FoundersMessage() {
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
                    Founder's Message
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      Digital Knights was created from the belief that identity
                      matters. Every color, every texture, and every design
                      choice represents intention and craft.
                    </p>
                    <p className="anim-uni-in-up">
                      This project is built on vision, resilience, and the
                      passion to create something that lasts. Thank you for
                      being part of the journey and for standing with us as we
                      continue shaping the world of Digital Knights.
                    </p>
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
