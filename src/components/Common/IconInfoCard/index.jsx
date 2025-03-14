import './style.css'
const IconInfoCard = ({ icon, title, description, backgroundColor }) => {
    return (
        <div
            className="p-4 info-card"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
             {icon && (
                    <div className="mb-2 icon">
                        <img
                            src={icon}
                            alt="icon"
                            style={{ width: "41px", height: "41px" }}
                        />
                    </div>
                )}
                <h5 className="fw-bold">{title}</h5>
                <hr className="my-2" />
                <p className="mb-0">{description}</p>
        </div>
    );
}

export default IconInfoCard;