import ibmLogo from "../../assets/images/ibm-logo.png";
const BrandLogos = () => {
  return (
    <div className="brand-logos container padding_y-spacing my-5">
        <div className="logos-display d-flex gap-5 justify-content-center align-items-center">
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
          <img src={ibmLogo} alt="logo" width='110px' height='44px' />
        </div>
    </div>
  )
}

export default BrandLogos