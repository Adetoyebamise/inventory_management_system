import React from "react"
import BannerLogo from "/src/assets/bannerframe.png"

function Banner() {
  return (
    <div className="banner__container">
      <img src={BannerLogo} alt="Banner Logo" className="banner__logo ml-8 mt-10" />
    </div>
  )
}

export default Banner
