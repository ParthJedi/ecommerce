import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 22.97;
    const publishableKey = "pk_test_51ImwN5SA1WFbW0vgoNuKIkzmZUiatW13vqvFnXL3Sgry9je8jlXxsoZ0eM4ojAEc27LRUjdt6FH9UqVsJGSv6eBE00GxqPkvVv";

    const onToken = token => console.log(token);

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Pawz Pet Care"
            billingAddress
            shippingAddress
            description={`Your total is: Rs ${price}`}
            amount={priceInCents}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;