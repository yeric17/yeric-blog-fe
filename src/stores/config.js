const MODE = import.meta.env.VITE_MODE;
const API_HOST = MODE === 'dev'? import.meta.env.VITE_API_HOST_DEV : import.meta.env.VITE_API_HOST_PROD;



export { API_HOST };