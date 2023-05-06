import axios from 'axios';

export const API_URL = `/api/`

const $apiFormData = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$apiFormData.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
})

$apiFormData.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    const comment={...JSON.parse(originalRequest.data)}
    originalRequest.data=comment

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $apiFormData.request(originalRequest);
        } catch (e) {
            console.log('Авторизуйтесь')
        }
    }
    throw error;
})

export default $apiFormData