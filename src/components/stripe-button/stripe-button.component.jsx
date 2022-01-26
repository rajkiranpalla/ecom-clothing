import React from "react";

import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const publishableKey = 'pk_test_51KMCWJSDhcKrudkmLpNsql54oE5dmpOvbsXFfUnN3cFmXNUZufiXKtTe3IHJU6CM3B8BdF0LHt62pHo01Cfrv5cc00MyvwtE1d'
    const priceForStripe = price * 100;
    const onToken = (token) => {
        // we need to use this token in the backend to complete the payment transaction
        console.log(token);
        alert("payment successful");
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name='ECOM Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
}

export default StripeCheckoutButton;
