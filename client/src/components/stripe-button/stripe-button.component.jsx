import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    //to send for stripe in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I2xDHDGilHrp3xFrMYy68dYgkaLZRZIKqQWfXrOtwTMAsXJsg7JibP7NDxPKGNcsKqNKrYEFr38E8MaznrDIjLT00xuSDe8nW';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log(`Payment error: ${error}`);
            alert('There wa an issue with your payemnt. Please sure use the provided credit card');

        })
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