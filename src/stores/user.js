import { writable } from "svelte/store";
import {goto} from "$app/navigation";
import { browser } from "$app/env";
import { addNotification } from "$stores/notifications";
import { API_HOST } from "$stores/config";

const user = writable({
    authenticated: false
});


const UpdateUser = function(newUser) {
    console.log("===================> updateUser", newUser);
    user.set(newUser);
}

const Login = function(user) {
        fetch(`${API_HOST}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
        .then(data => {
        
            console.log("===================> login", data);
        
            if (data.success) {
                let userData = data.data;
                userData.authenticated = true;
                UpdateUser(userData);
                
                addNotification({type: "success", message: "Ha ingresado correctamente", duration: 5000});
                return {ok:true, message: "Login Successful"}
            }

            let notificationMessage = "";
            if(data.message.includes("email not confirmed")) {
                notificationMessage = "Por favor confirme su correo electrónico";
            }
            else if(data.message.includes("password")) {
                notificationMessage = "Usuario y/o Contraseña incorrecta";
            }
            else {
                notificationMessage = "Usuario y/o Contraseña incorrecta";
            }
            addNotification({type:"error", message: notificationMessage, duration: 5000});
            return {ok:false, message: data.message};
        })
        .catch(error => {
            console.log("===================> login error", error);
            addNotification({type:"error", message: "Error del servidor", duration: 5000});
            return {ok:false, message: error.message}
        });
}

async function Logout() {
    localStorage.removeItem("token");
    UpdateUser({
        authenticated: false
    });
    addNotification({type:"success", message: "Ha cerrado sesión correctamente", duration: 5000});
    goto("/");
}

function Auth() {
    // let token = localStorage.getItem("token");
    // if (!token) {
    //     return {ok:false, message: "No hay token"};
    // }
    // fetch(`${API_HOST}/users/auth`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": token
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
   
    //     console.log("===================> auth", data);

    //     if (data.success) {
    //         let userData = data.data;
    //         userData.authenticated = true;
    //         UpdateUser(userData);
    //         return {ok:true, message: "Auth Successful", data: userData};
    //     }
    // })
    // .catch(error => {
    //     return {ok:false, message: "Error del servidor"};
    // });

}

async function Register(user) {
    let response = await fetch(`${API_HOST}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    let data = await response.json();
    console.log("===================> register", data);

    if (data.success) {
        addNotification({type:"success", message: "Se ha registrado correctamente, por favor confirme su email", duration: 5000});
        return true
    }
    return false;
}

export { user, Login, Logout, Auth, Register, UpdateUser };