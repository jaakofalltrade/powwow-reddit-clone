import axios from 'axios';
import auth from '../auth/Auth'

const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});


const apiService = {
    async getJWT(payload) {
        // Returns the access and refresh token
        return await apiInstance.post('api/token', payload)
    },
    async login(payload) {
        // Returns user data
        return await apiInstance.post('login', payload)
    },
    async signUp(payload) {
        // Returns the success response
        return await apiInstance.post('users/', payload)
    },
    async checkJWT() {
        // Checks access tokens' validity
        return await apiInstance.post('api/token/verify/', {
            token: auth.authData.access()
        });
    },
    async refreshJWT() {
        // Uses the refresh token to get new access token
        return await apiInstance.post('api/token/refresh', {
            refresh: auth.authData.refresh()
        });
    },
    async getCommunities(data) {
        return await apiInstance.get(data)
    }
}

export default apiService;