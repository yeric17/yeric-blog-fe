const MODE = "prod";
// const API_HOST = MODE === 'dev'? import.meta.env.VITE_API_HOST_DEV : import.meta.env.VITE_API_HOST_PROD;
const API_HOST = MODE === 'dev'? "http://localhost:3000/api" : "https://yericdev.herokuapp.com/api";

export { API_HOST };