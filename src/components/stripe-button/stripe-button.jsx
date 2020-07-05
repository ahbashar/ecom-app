import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey= 'pk_test_51H1SqrDFJqpqJfcKzd94jdJZ48R85TpqOdD5gA9QV82EAML94ScKMm5NeIKJQRU6fnrmieFwrnBNtCfyJhLh00YE00mj2nRLLD'
	
	const onToken = token => {
		console.log(token)
		alert('Payment Successsful')
	}
	return(
		<StripeCheckout 
			label = 'Pay Now'
			name = 'Ecom App'
			billingAddress
			shippingAddress
			image = 'https://image.flaticon.com/icons/svg/3154/3154348.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)	
}

export default StripeCheckoutButton