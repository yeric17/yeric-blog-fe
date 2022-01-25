// import cookie from 'cookie';
// import { v4 as uuid } from '@lukeed/uuid';
import {ParseCookie} from '$lib/utils';
import {API_HOST} from '$stores/config';
import { identity } from 'svelte/internal';

export const handle = async function({ request, resolve }) {
	
	let cookie = request.headers.cookie;
	const method = request.url.searchParams.get('_method');
	if (method) {
		request.method = method.toUpperCase();
	}
	if (cookie && request.method === 'GET') {
		cookie = ParseCookie(cookie);
		let token = cookie.token;
		if (token) {
			let response = await fetch(`${API_HOST}/users/auth`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": token
				}
			});
			if(response.ok){
				let data = await response.json();
				if(data.success){
					let user = data.data;
					user.authenticated = true;
					request.locals.user = user;
				}
			}
		}
	}
	

	if (cookie && request.method === 'POST') {
		let user = ParseCookie(cookie).user;
		if (user) {
			let localUser = JSON.parse(user);
			localUser.authenticated = true;
			request.locals.user = localUser;
		}
	}
	
	const response = await resolve(request);
	
	
	return response;
};

export function getSession(event){
    return event.locals.user
		? {user: {...event.locals.user}} 
		: {user: {authenticated: false}};
}