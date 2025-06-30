import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/btn-Icon.png';

const supportBrands = [
    {
        id: 1,
        title: "MemaTech Foundation",
        description:
            "Focused on building strong digital foundations, MemaTech Foundation provides digital literacy and skills training to girls and women in northern Nigerian communities , ensuring no one is left behind in the digital revolution.",
        image: null,
        urlLink: "https://mematechfoundation.org/",
    },
    {
        id: 2,
        title: "Immersive Tech Africa",
        description:
            "Leading the charge in immersive technologies, this organization drives the adoption of advanced tech skills in areas like AR, VR, and AI preparing Africa for the future of digital innovation.",
        image: null,
        urlLink: "https://www.linkedin.com/company/immersive-tech-africa/",
    },
];

const SupportSection = () => {
  return (
    <div className='support-section'>
        <section className="section_headingWithBtn padding_y-spacing my-5">
            <h2>Support the Adoption of Digital Skills</h2>
            <p className='my-3'>Your organization’s success depends on the strength of your team. At Cosmos Academy, whether you’re preparing for digital transformation or strengthening your team’s capabilities, we provide training that makes an immediate impact.</p>
        </section>


        {supportBrands.map((item, index) => (
            <div key={index} className="row padding_y-spacing">
                <div className="col-md-8 col-sm-12 my-3">
                    <div className="section-heading my-5">
                        <h2>{item.title}</h2>
                        <p className='my-4'>{item.description}</p>

                        <div className="btn-action_div justify-content-start">
                            <a href={item.urlLink} target="_blank" rel="noopener noreferrer" className="customBtn">
                                <span>Learn More</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-5">
                    {/* <div className="container-img mx-2">
                        <img loading='lazy' src="" alt="img" className='img-fluid' />
                    </div> */}
                </div>
            </div>
        ))}

    </div>
  )
}

export default SupportSection