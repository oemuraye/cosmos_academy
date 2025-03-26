import ibmLogo from "../../assets/images/ibm-logo.png";
import immersiveLogo from "../../assets/images/immersive-logo.png";
import memaTechLogo from "../../assets/images/mematech-logo.png";

const BrandLogos = () => {
  return (
    <div className="brand-logos container padding_y-spacing my-5">
        <div className="logos-display d-flex gap-5 justify-content-center align-items-center">
          <img src={memaTechLogo} alt="logo" width='110px' height='44px' />
          <img src={immersiveLogo} alt="logo" width='110px' height='44px' />
          {/* <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' /> */}
        </div>
    </div>
  )
}

export default BrandLogos