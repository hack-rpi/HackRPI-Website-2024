import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	event: a
		.model({
			id: a.id().required(),
			title: a.string().required(),
			description: a.string(),
			startTime: a.timestamp().required(),
			endTime: a.timestamp().required(),
			location: a.string().required(),
			speaker: a.string().default(""),
			visible: a.boolean().default(false).required(),
		})
		.authorization((allow) => {
			return [
				allow.group("directors").to(["create", "update", "delete", "read"]),
				allow.authenticated("identityPool").to(["read"]),
				allow.guest().to(["read"]),
			];
		}),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: "identityPool",
		apiKeyAuthorizationMode: {
			description: "Mobile App API Key",
			expiresInDays: 365,
		},
	},
	name: "HackRPI2024-Events",
});
