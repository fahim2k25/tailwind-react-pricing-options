import React from 'react';
import { use } from 'react';

const PricingOptions = ({ pricingPromise }) => {
    const paymentData = use(pricingPromise);
    const { paymentOptions } = paymentData;


    return (
        <div>
            {paymentOptions.map(elem => console.log(elem.title))}
        </div>
    );
};

export default PricingOptions;