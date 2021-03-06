export async function post({request}){
    let body = await request.json();
    let response = await fetch(`https://yeric-blog-api.herokuapp.com/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    console.log({response})
    if(response.status === 200){
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

