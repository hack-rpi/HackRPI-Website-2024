import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
	loginWith: {
		email: {
			userInvitation: {
				emailSubject: "HackRPI 2024 Director's Schedule Portal",
				emailBody(username, code) {
					return `
					<!DOCTYPE html>
					<html lang="en">
					<head>
						<meta charset="UTF-8">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Document</title>
						</head>
						<body>
							<h1>Welcome to HackRPI 2024 Director's Schedule Portal</h1>
							<p>Hi ${username()},</p>
							<p>Click the link below to sign in to the HackRPI 2024 Director's Schedule Portal.</p>
							<p> Sign in with your email and the temporary password below.</p>
							<a href="https://hackrpi2024.com/directors">Sign in</a>
							<p>Temporary Password: ${code()}</p>
							<p>Thank you!</p>
							<p> -- Cooper Werner, HackRPI 2024 Director of Technology</p>
						</body>
					</html>`;
				},
			},
			verificationEmailStyle: "CODE",
			verificationEmailSubject: "HackRPI 2024 Director's Schedule Portal Verification Code",
			verificationEmailBody(createCode) {
				return `Your verification code is ${createCode()}`;
			},
		},
	},
	groups: ["directors"],
});
