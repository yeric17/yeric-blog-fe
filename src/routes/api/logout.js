export function get(){
    return {
        status: 302,
        headers: {
            "set-cookie": `token=;user=; HttpOnly; Path=/`,
        },
        redirect: '/'
    }
}