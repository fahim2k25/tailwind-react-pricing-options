import React from 'react';
import { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const paymentData = use(pricingPromise);
    const { paymentOptions } = paymentData;

    return (
        <div className="flex gap-2 justify-between">
            {paymentOptions.map((elem, index) => <PricingCard key={index} priceCard={elem}></PricingCard>)}
        </div>
    );
};

export default PricingOptions;