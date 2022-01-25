import {API_HOST} from '$stores/config';

export async function post({body}){
    
    let response = await fetch(`${API_HOST}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });

    if(response.ok){
        let data = await response.json();

        if(data.success){
            let user = data.data;
            user.authenticated = true;
            //Redirect to home
            return {
                status: 200,
                ok: true,
                headers: {
                    "set-cookie": `token=${user.token};user=${JSON.stringify(user)}; HttpOnly; Path=/`,
                },
                body: JSON.stringify(user)
            }
        }
    }

    return {
        ...response,
    }
}

