import exploreIcon from '../../../assets/icons/go-icon.png';
import './style.css';


const CallToAction = ({header, content, cta, link, modalId, modalContent}) => {
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
                    <button 
                        className="customBtn"
                        onClick={link ? () => externalLinkClick(link) : undefined} 
                        data-bs-toggle={modalId ? "modal" : undefined}
                        data-bs-target={modalId ? `#${modalId}` : undefined}
                    >
                    
                        <span>{cta || "Get Started"}</span> <img src={exploreIcon} alt="icon" />
                    </button>
                </div>
            </section>
            
            {modalId && (
                <section className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex justify-content-end p-2">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {modalContent}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    </section>
  )
}

export default CallToAction