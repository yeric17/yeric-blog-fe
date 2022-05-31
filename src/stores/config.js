const MODE = "dev";
const API_HOST = MODE === 'dev'? "http://localhost:3000/api" : "https://yericdev.herokuapp.com/api";

export { API_HOST };