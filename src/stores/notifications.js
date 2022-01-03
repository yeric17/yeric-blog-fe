import { writable } from "svelte/store";

const notifications = writable([]);

function addNotification(notification = {
    id: Date.now(),
    type: "info",
    message: "",
    duration: 5000
}) {

    notifications.update(n => [...n, notification]);

    setTimeout(()=>{
        notifications.update(n => n.filter(notif => notif.id !== notification.id));
    }, notification.duration);
  
}


export { notifications, addNotification };