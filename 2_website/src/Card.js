import React from 'react'

const Card = ({src, title, Paragraph, buttonText}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img
                src={src}
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                  {Paragraph}
                </p>
                <a href="#" class="btn btn-success">{buttonText}</a>
            </div>
        </div>
    )
}

export default Card;