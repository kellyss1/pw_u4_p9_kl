import axios from 'axios';

const AUTH_URL = 'http://localhost:8082/auth/token';

export const getAuthToken = () => localStorage.getItem('authToken');
export const getTokenExpiresAt = () => localStorage.getItem('tokenExpiresAt');

export const isTokenValid = () => {
    const token = getAuthToken();
    const expiresAt = Number(getTokenExpiresAt());
    if (!token || !expiresAt) return false;
    return Date.now() < expiresAt * 1000;
};

export const setAuth = (token, expiresAt) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('tokenExpiresAt', String(expiresAt));
    localStorage.setItem('estaAutenticado', 'true');
};

export const clearAuth = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiresAt');
    localStorage.setItem('estaAutenticado', 'false');
};

export async function getToken(username, password) {
    try {
        const response = await axios.get(AUTH_URL, {
            params: {
                user: username,
                password: password
            }
        });

        const token = response.data.accessToken;
        const expiresAt = response.data.expiresAt;

        return { token, expiresAt };
    } catch (error) {
        console.error('Error al obtener el token:', error);
        throw error;
    }
}