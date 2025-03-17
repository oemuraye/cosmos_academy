import exploreIcon from '../../../assets/icons/go-icon.png';
import './style.css';


const CallToAction = ({header, content, cta, link}) => {
    const externalLinkClick = (url) => {
        window.open(`${url}`, '_self');
    };
  return (
    <section className='why-section padding_y-spacing container'>
        <div className="why-content">
            <section className="section_headingWithBtn why-details px-3">
                <h2>{header || "Header Here!"}</h2>
                <p className='my-3'>{content || "Some content here!"}</p>
                <div className="btn-action_div my-4">
                    <button onClick={link ? () => externalLinkClick(link) : undefined} className="customBtn">
                        <span>{cta || "Get Started"}</span> <img src={exploreIcon} alt="icon" />
                    </button>
                </div>
            </section>
            
        </div>
    </section>
  )
}

export default CallToAction