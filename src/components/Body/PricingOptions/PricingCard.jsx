import React from 'react';

const PricingCard = ({ priceCard }) => {
    const { title, price, description, image, purchaseLink } = priceCard;
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <img src={image} alt={description} width="350px" />
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;