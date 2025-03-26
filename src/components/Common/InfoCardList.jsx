const InfoCardList = ({ items, academyCard = false }) => {
    return (
        <section className={`explorerAd-section ${academyCard && 'academy-card'}`}>
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className={`my-3 ${academyCard ? "col-md-6" : "col-md-4"} col-sm-6`}>
                        <div className="explorer-card mx-md-auto mx-auto mw-md-100">
                            {item.icon && <div className="icon-wrapper mb-3">
                                <img src={item.icon} alt="icon" width='20.84px' height='19.33px' />
                            </div>}
                            <h4 className='mb-3'>{item.title}</h4>
                            <hr />
                            <p dangerouslySetInnerHTML={{ __html: item.description}}></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoCardList;
