import React from "react"
import FooterLogoOne from "../../src/assets/footer_frame_22668.png"
import FooterLogoOverlapp from "../../src/assets/footer_phone_mockups.png"

function Footer() {
  return (
    <div className="footer__imgs relative flex justify-end  py-10 overflow-hidden">
      <div className="relative z-18">
        <FooterPlacement src={FooterLogoOne} altText="Footer Logo One" className="footer__img__item__left" />
      </div>
      <div className="absolute z-20 -right-19 top-8">
        <FooterPlacement src={FooterLogoOverlapp} altText="Footer Logo Overlap" className="footer__img__item__right" />
      </div>
    </div>
  )
}

function FooterPlacement({ src, altText }) {
  return (
    <div>
      <img src={src} alt={altText} class="w-full object-contain " />
    </div>
  )
}
export default Footer
