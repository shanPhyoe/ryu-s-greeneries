import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ cartItems, price }) => {
    const publishableKey =
        'pk_test_51Kan71JFjet6bilwYmNx7CNiIpPzjR5nUmOZEHvuRuQSNAisuMJ5CNS92CKXXd26aNoszqR5Ow88lOolQXXDIB1k00Che2S0wO';
    return (
        <StripeCheckout
            label="Proceed with Payment"
            name="Ryu's Greeneries Shop"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            stripeKey={publishableKey}
            // token={onToken}
        />
    );
};

export default StripeCheckoutButton;
