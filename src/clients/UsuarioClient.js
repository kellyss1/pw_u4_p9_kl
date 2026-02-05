import axios from 'axios';

const user = "kelly";
const password = "123";
const AUTH_URL = 'http://localhost:8082/auth/token';

let cachedToken = null;
let tokenExpiry = null;

export async function getToken() {
    // Validar si el token en cache sigue siendo válido
    if (cachedToken && tokenExpiry && new Date().getTime() < tokenExpiry * 1000) {
        return cachedToken;
    }

    try {
        const response = await axios.get(AUTH_URL, {
            params: {
                user: user,
                password: password
            }
        });

        cachedToken = response.data.accessToken;
        tokenExpiry = response.data.expiresAt;

        console.log('Token OAuth 2.0 obtenido exitosamente');
        return cachedToken;
    } catch (error) {
        console.error('Error al obtener el token:', error);
        throw error;
    }
}