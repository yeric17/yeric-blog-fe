
export async function get(event){
    const reponse = await fetch(`https://yeric-blog-api.herokuapp.com/contact`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": event.locals.user.token
        }
    });
    if(reponse.status === 200){
        const data = await reponse.json();
        return {
            ok: true,
            status: 200,
            body: JSON.stringify(data)
        }
    }
    return {
        status: reponse.status,
        body: JSON.stringify({
            ok: false,
            success: false,
            message: "Error"
        })
    }

}
export async function post({ request })  {
    const body = await request.json();
    const response = await fetch(`https://yeric-blog-api.herokuapp.com/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    if (response.ok) {
        const data = await response.json();
        return {
            status: 200,
            ok: true,
            body: JSON.stringify(data)
        }
    }
    return {
        ok: false,
        ...response,
    }
    
}

export async function del(event) {
    const id = event.url.searchParams.get('id');
    const response = await fetch(`https://yeric-blog-api.herokuapp.com/contact/id/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": event.locals.user.token
        }
    })
    if (response.status === 200) {
        const data = await response.json();
        return {
            status: 200,
            ok: true,
            body: JSON.stringify(data)
        }
    }
    return {
        ok: false,
        ...response,
    }

}