// import cookie from 'cookie';
// import { v4 as uuid } from '@lukeed/uuid';
import { Auth } from "./stores/user";

export const handle = async function({ request, resolve }) {

	const method = request.url.searchParams.get('_method');
	if (method) {
		request.method = method.toUpperCase();
	}

	await Auth();


	const response = await resolve(request);

	return response;
};
