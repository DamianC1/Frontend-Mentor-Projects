import * as yup from 'yup';

export const userSchema = yup.object().shape({
	cardHolderName: yup.string().required('Your name is required!'),
	cardNumber: yup
		.number()
		.typeError('Amount must be a number')
		.positive()
		.integer()
		.required('Card number is required'),
	month: yup.number().typeError("Can't be blank").positive().integer().required("Can't be blank"),
	year: yup.number().typeError("Can't be blank").positive().integer().required("Can't be blank"),
	cvc: yup.number().typeError("Can't be blank").positive().integer().required("Can't be blank"),
});
