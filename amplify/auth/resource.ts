import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
			userInvitation:{
				emailSubject: 'HackRPI 2024 Director\'s Schedule Portal',
				emailBody(username, code) {
					return `Hello ${username()}, \n\n You have been added to the HackRPI 2024 Director's Schedule Portal. \n\n Please sign in using this email and the following temporary password at https://hackrpi.com/directors:
					\n\n Temporary Password: ${code()} \n\n You will be prompted to change your password upon signing in. Thank you! \n\n - Cooper Werner, Director of Technology, HackRPI 2024`;
				},
			},
			verificationEmailStyle: 'CODE',
			verificationEmailSubject: 'HackRPI 2024 Director\'s Schedule Portal Verification Code',
			verificationEmailBody(createCode) {
				return `Your verification code is ${createCode()}`;
			},
		},
  },
	groups: ['directors'],
});
