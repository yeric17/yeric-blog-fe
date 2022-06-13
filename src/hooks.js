// import cookie from 'cookie';
// import { v4 as uuid } from '@lukeed/uuid';
import {ParseCookie} from '$lib/utils';
import jwt_decode from 'jwt-decode';

export const handle = async function({ event, resolve }) {
	
	let cookie = event.request.headers.get('cookie');
	const method = event.request.method;
	if (cookie && method === 'GET') {
		cookie = ParseCookie(cookie);
		let token = cookie.token;
		if (token) {
			await fetch(`https://yeric-blog-api.herokuapp.com/users/auth`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": token
				}
			}).then(response => {			
				if(!response.ok){
					console.log(response);
				}
				return response.json();
			})
			.then(data => {
				if(data.success){
					let user = data.data;
					user.authenticated = true;
					event.locals.user = user;
				}
			})
			.catch(err => {
				console.log(err);
			});
			
		}
	}
	

	if (cookie && method === 'POST' || method === 'DELETE' || method === 'PUT') {
		const token = ParseCookie(cookie).token;
		let user = jwt_decode(token);
		if (user) {
			let localUser = user;
			localUser["authenticated"] = true;
			localUser["token"] = token;
			event.locals.user = localUser;
		}
	}
	
	const response = await resolve(event);
	
	
	return response;
};

export function getSession(event){
    return event.locals.user
		? {user: {...event.locals.user}} 
		: {user: {authenticated: false}};
}