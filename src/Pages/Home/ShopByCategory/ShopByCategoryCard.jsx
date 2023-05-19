import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategoryCard = ({data}) => {
    const {_id, toy_name, price, picture, ratings} = data

    return (
        <div className="card md:w-96 glass">
            <figure><img className="w-full h-60" src={picture} alt="41h-Ksm2-SJ0-L" border="0" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>Price: {price} $</p>
                <p>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <Link to={`/categoryToyDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryCard;