const PersonCardList = ({people}) => {
    const explorers = people || [];
    return (
        <section className="trainers-section px-5">
            <div className="container">
                <div className="trainers-cards d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                    {explorers.map((explorer, index) => (
                        <div className="mb-4" key={index}>
                            <div className="trainer-card m-auto">
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