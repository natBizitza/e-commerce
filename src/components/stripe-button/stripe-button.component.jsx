import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //to send for stripe in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I2xDHDGilHrp3xFrMYy68dYgkaLZRZIKqQWfXrOtwTMAsXJsg7JibP7NDxPKGNcsKqNKrYEFr38E8MaznrDIjLT00xuSDe8nW';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'E-beast Ltd'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is €${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton;