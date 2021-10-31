import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, img, description } = props.service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>

                </div>
                {/* <div>
                    <button className="btn btn-warning">Book Now</button>
                </div> */}
                <div>
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn btn-warning">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;