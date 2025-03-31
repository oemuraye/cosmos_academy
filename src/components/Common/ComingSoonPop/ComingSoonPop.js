import popImage from '../../../assets/images/hive-five_gif.gif';
import exploreIcon from '../../../assets/icons/btn-Icon.png';

const ComingSoonPop = ({title, text, popImg, btnText, welcomeModal=false, widthSize, heightSize }) => {
  return (
    <section className="pageModal contactUs_section text-center">
        <h2 className="">{title || 'Become a Cosmos Explorer'}</h2>
        <p className="my-2">{text || 'Sorry the Cosmos Explorer is not currently available. We are still getting it set up for you'}</p>

        <div className={`d-flex align-items-center justify-content-center my-5 ${welcomeModal ? 'welcomeModal' : ''}`}>
          <img src={popImg || popImage} alt="img" width="129px" height="89px" className='img-fluid' style={{width: widthSize ? widthSize : '129px', height: heightSize ? heightSize : '89px'}} />
        </div>
        
        <div className="btn-action_div my-4">
            <button 
                className="customBtn"
                // onClick={() => window.history.back()}
                data-bs-dismiss="modal" aria-label="Close" 
            >
                <span>{btnText || "Go back"}</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
            </button>
        </div>
    </section>
  )
}

export default ComingSoonPop