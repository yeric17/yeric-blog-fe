import { writable } from "svelte/store";
import {goto} from "$app/navigation";
import { browser } from "$app/env";


const user = writable({
    authenticated: false
});


const UpdateUser = function(newUser) {
    console.log("===================> updateUser", newUser);
    user.set(newUser);
}

const Login =  async function(user) {
    let response = await fetch("http://localhost:7070/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    let data = await response.json();
    console.log("===================> login", data);

    if (data.success) {
        let userData = data.data;
        userData.authenticated = true;
        UpdateUser(userData);
        localStorage.setItem("token", data.token);
        return true
    }
    return false;
}

async function Logout() {
    localStorage.removeItem("token");
    UpdateUser({
        authenticated: false
    });
    goto("/");
}

async function Auth() {
    if(browser) {
        let token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        let response = await fetch("http://localhost:7070/users/auth", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        let data = await response.json();
        console.log("===================> auth", data);
    
        if (data.success) {
            let userData = data.data;
            userData.authenticated = true;
            UpdateUser(data.data);
            return true
        }
    }
        
    return false;
}

async function Register(user) {
    let response = await fetch("http://localhost:7070/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    let data = await response.json();
    console.log("===================> register", data);

    if (data.success) {
        return true
    }
    return false;
}

export { user, Login, Logout, Auth, Register, UpdateUser };