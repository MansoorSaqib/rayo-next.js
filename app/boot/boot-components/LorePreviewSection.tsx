import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function LorePreview() {
  return (
    <div
      className="mxd-section padding-pre-pinned-img"
      style={{ marginTop: 30 }}
    >
      <div className="mxd-container grid-container">
        {/* Block - About Description with Manifest Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0 d-xl-flex justify-content-xl-center">
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__manifest">
                    <RevealText
                      as="p"
                      //   style={{ fontSize: 30 }}
                      className="mxd-manifest mxd-manifest-l reveal-type"
                    >
                      In a fractured digital realm, identity is forged through
                      color and armor. The Knights rise as symbols of resilience
                      and purpose, each shaped by the tones and textures they
                      carry. Their world is driven by contrast, precision, and
                      meaning — a universe where every design tells a story and
                      every Knight stands for something greater.
                    </RevealText>
                    <div className="mxd-manifest__controls">
                      <AnimatedButton
                        text="Read Full Lore"
                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with Manifest End */}
      </div>
    </div>
  );
}

// import AnimatedButton from "@/components/animation/AnimatedButton";
// import RevealText from "@/components/animation/RevealText";

// export default function LorePreview() {
//   return (
//     <div className="mxd-section padding-default">
//       <div className="mxd-container grid-container">
//         {/* Block - About Description with Manifest Start */}
//         <div className="mxd-block">
//           <div className="container-fluid px-0">
//             <div className="row gx-0 d-xl-flex justify-content-xl-center">
//               <div className="col-12 col-xl-8 mxd-grid-item no-margin">
//                 <div className="mxd-block__content">
//                   <div className="mxd-block__manifest centered anim-uni-in-up">
//                     <RevealText
//                       as="p"
//                       className="mxd-manifest mxd-manifest-l reveal-type"
//                     >
//                       In a fractured digital realm, identity is forged through
//                       color and armor. The Knights rise as symbols of resilience
//                       and purpose, each shaped by the tones and textures they
//                       carry. Their world is driven by contrast, precision, and
//                       meaning — a universe where every design tells a story and
//                       every Knight stands for something greater.
//                     </RevealText>
//                     <div className="mxd-manifest__controls anim-uni-in-up">
//                       <div className="mxd-btngroup centered">
//                         <AnimatedButton
//                           text="My Works"
//                           className="btn btn-anim btn-default btn-accent slide-right-up"
//                           href={`/works-masonry`}
//                         >
//                           <i className="ph-bold ph-arrow-up-right" />
//                         </AnimatedButton>
//                         <AnimatedButton
//                           text="Download CV"
//                           as={"a"}
//                           className="btn btn-anim btn-default btn-outline slide-down"
//                           href="#"
//                         >
//                           <i className="ph-bold ph-arrow-down" />
//                         </AnimatedButton>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Block - About Description with Manifest End */}
//       </div>
//     </div>
//   );
// }
