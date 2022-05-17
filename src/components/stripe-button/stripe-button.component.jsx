import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ cartItems, price }) => {
    const publishableKey =
        'pk_test_51Kan71JFjet6bilwYmNx7CNiIpPzjR5nUmOZEHvuRuQSNAisuMJ5CNS92CKXXd26aNoszqR5Ow88lOolQXXDIB1k00Che2S0wO';
    const items = cartItems.map(item => {
        return {
            id: item.id,
            quantity: item.quantity,
        };
    });

    const onToken = token => {
        fetch('https://ryus-greeneries-server.herokuapp.com/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: items,
                token,
            }),
        })
            .then(response => {
                alert('Payment successful!');
            })
            .catch(error => {
                // console.log(error);
                alert(
                    'There was an issuse with your payment. Please make sure your use the correct TEST credit card details!'
                );
            });
    };

    return (
        <StripeCheckout
            label="Proceed with Payment"
            name="Ryu's Greeneries Shop"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            stripeKey={publishableKey}
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;
