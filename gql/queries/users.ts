import { gql } from 'graphql-request';

export const GET_USER_LOGIN = gql`
	query GET_USER_LOGIN($username: String) {
		users(where: { username: { _eq: $username } }) {
			id
			email
			fullname
			username
			role
			avatar
			avatar_id
			password
		}
	}
`;

export const GET_USER = gql`
	query GET_USER($id: String) {
		users(where: { id: { _eq: $id } }) {
			id
			email
			fullname
			username
			role
			avatar
			avatar_id
		}
	}
`;

export const GET_USERS = gql`
	query GET_USER {
		users {
			id
			email
			fullname
			username
			role
			avatar
			avatar_id
		}
	}
`;
