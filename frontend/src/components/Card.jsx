

const Card = ({ title, imgSrc, text, url = "#", imgAlt = "", }) => {
    return (
        <div>
            <div className="card rounded-top-0">
                    <img src={imgSrc} className="card-img-top rounded-0" alt={imgAlt}/>
                    <div className="card-body">
                    <h5 className="card-title h6 fw-bold text-secondary">{title}</h5>
                        <p className="card-text">{text}</p>
                        <a href={url} className="btn fw-bold btn-primary rounded-0">Read More...</a>
                    </div>
            </div>
        </div>
    )
}

export default Card