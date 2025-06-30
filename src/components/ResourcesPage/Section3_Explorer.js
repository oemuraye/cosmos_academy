import React from 'react'
import { Link } from 'react-router-dom';

import exploreIcon from '../../assets/icons/btn-Icon.png';

import israelImage from "../../assets/images/israelImage.png";
import aromeImage from "../../assets/images/aromeImage.png";
import fonaImage from "../../assets/images/fonaImage.png";
import danielImage from "../../assets/images/danielImage.png";
import obadaImage from "../../assets/images/obadaImage.png";
import ComingSoonPop from '../Common/ComingSoonPop/ComingSoonPop';


const explorers = [
  {
    name: "Israel Ufumaka",
    role: "Artificial Intelligence Expert",
    image: israelImage,
  },
  {
    name: "Arome Ibrahim",
    role: "AR/VR Developer",
    image: aromeImage,
  },
  {
    name: "Erhabor Fona",
    role: "Mobile Developer",
    image: fonaImage,
  },
  {
    name: "Daniel Fishbone",
    role: "Embedded System/IOT",
    image: danielImage,
  },
  {
    name: "Obadamilare Akinyiga ",
    role: "Artificial Intelligence Developer",
    image: obadaImage,
  },
];

const explorerData = [
    {
      title: "Showcase Your Expertise",
      description: "Establish yourself as a thought leader by sharing valuable insights on technology, innovation, and digital transformation."
    },
    {
      title: "Reach Global Audience",
      description: "Reach thousands of learners, industry professionals, and tech enthusiasts who are eager to learn and connect."
    },
    {
      title: "Amplify Your Voice",
      description: "Whether it's a tutorial, industry analysis, or personal learning journey, your content can inspire and educate others."
    },
    {
      title: "Build Your Personal Brand",
      description: "Enhance your online presence and grow your influence within the Cosmos Academy community and beyond."
    },
    {
      title: "Enhance Your Learning",
      description: "Writing about what you learn helps your understanding, and solidify your skill while contributing to a growing knowledge hub."
    }
  ];


const ExplorerSection = () => {
  return (
    <section className='explorer-section padding_y-spacing container my-5'>
        <section className="container">
            <div className="section-heading my-5" id='explorer-section'>
                <h2>Become An Explorer</h2>
                <p>
                    Cosmos Explorer is your space to share insights, 
                    experiences, and discoveries with the world. Whether you're a tech enthusiast, 
                    a digital entrepreneur, or a creative mind, 
                    this platform gives you the opportunity to write and publish your own blogs on our website.
                </p>
            </div>
            <div className="btn-action_div justify-content-start">
                <Link className="customBtn" data-bs-toggle="modal" data-bs-target="#exploreModal">
                    <span>Join Explorer</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                </Link>
            </div>

            {/* <!-- Modal --> */}
            <section className="modal fade" id="exploreModal" tabIndex="-1" aria-labelledby="exploreModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="d-flex justify-content-end p-2">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ComingSoonPop />
                        </div>
                    </div>
                </div>
            </section>
      </section>

      <section className='explorerAd-section my-5'>
        <div className="row">
          {explorerData.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 my-3">
              <div className="explorer-card">
                <h4 className='mb-3'>{item.title}</h4>
                <hr />
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="how_it_works-section">
            <div className="container">
                <h4 className='mb-4'>How it works</h4>

                <ol>
                    <li className='mb-4'>
                        <p className='mb-0'>
                            <span className='info-title'>Write Your Article –</span>
                            <span className='info-desc ms-2'>Craft insightful content that aligns with Cosmos Academy’s mission.</span>
                        </p>
                    </li>

                    <li className='mb-4'>
                        <p className='mb-0'>
                            <span className='info-title'>Submit for Review –</span>
                            <span className='info-desc ms-2'>Our editorial team will review and optimize your post for maximum impact.</span>
                        </p>
                    </li>

                    <li className='mb-4'>
                        <p className='mb-0'>
                            <span className='info-title'>Get Published –</span>
                            <span className='info-desc ms-2'>Your article goes live on our website, reaching a global audience.</span>
                        </p>
                    </li>

                    <li className='mb-4'>
                        <p className='mb-0'>
                            <span className='info-title'>Engage & Grow –</span>
                            <span className='info-desc ms-2'>Share your post, get feedback, and connect with like-minded professionals.</span>
                        </p>
                    </li>
                </ol>
            </div>


      </section>

        <section className="trainers-section padding_y-spacing">
          <div className="container">
              <div className="section-heading my-5">
                <h2>Meet other Explorers</h2>
                <p>
                    Join a community of innovators, share ideas, and collaborate on impactful projects. 
                    Connect, learn, and grow with like-minded thinkers shaping the future!
                </p>
              </div>
          </div>
          <div className="cloud-overlay">
            <div className="trainers-cards container">

              <div className="cards-display ps-3 ps-md-5">
                  {explorers.map((explorer, index) => (
                      <div className="trainer-card my-4" key={index}>
                      <img loading='lazy' src={explorer.image} alt={explorer.name} width="100%" height="250px" className="img-fluid xt-border-radius" />
                      <div className="card-content p-3">
                          <h6>{explorer.name}</h6>
                          <p>{explorer.role}</p>
                      </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
    </section>
  )
}

export default ExplorerSection;