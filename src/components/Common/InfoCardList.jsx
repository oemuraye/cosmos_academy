const InfoCardList = ({ items, academyCard = false, useCol6 = false }) => {
    return (
        <section className={`explorerAd-section ${academyCard && 'academy-card'}`}>
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className={`my-3 ${academyCard ? "col-md-6" : "col-md-4"} ${useCol6 && "col-md-6"}`}>
                        <div className="explorer-card mx-md-auto mx-auto mw-md-100">
                            {item.icon && <div className="icon-wrapper mb-3">
                                <img src={item.icon} alt="icon" width='20.84px' height='19.33px' />
                            </div>}
                            <h4 dangerouslySetInnerHTML={{ __html: item.title}} className='mb-3'></h4>
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
