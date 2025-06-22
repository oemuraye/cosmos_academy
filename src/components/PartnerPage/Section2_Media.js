import mediaImag from '../../assets/images/COSMOS CONFERENCE-50.png'

const MediaSection = () => {
  return (
    <section className='media-section padding_y-spacing py-5 px-2'>
        <img loading='lazy' src={mediaImag} alt="img" className='img-fluid' />
    </section>
  )
}

export default MediaSection