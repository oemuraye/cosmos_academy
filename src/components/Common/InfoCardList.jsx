const InfoCardList = ({ items }) => {
    return (
        <section className='explorerAd-section'>
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className="col-md-4 col-sm-6 my-3">
                        <div className="explorer-card mx-md-auto mx-0 mw-md-100">
                            <h4 className='mb-3'>{item.title}</h4>
                            <hr />
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default InfoCardList;