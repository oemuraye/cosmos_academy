const PersonCardList = ({people}) => {
    const explorers = people || [];
    return (
        <section className="trainers-section px-5">
            <div className="container">
                <div className="row justify-content-start">
                    {explorers.map((explorer, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <div className="trainer-card">
                                <img src={explorer.image} alt={explorer.name} width="100%" height="250px" className="img-fluid xt-border-radius" />
                                <div className="card-content p-3">
                                    <h6>{explorer.name}</h6>
                                    <p>{explorer.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PersonCardList;