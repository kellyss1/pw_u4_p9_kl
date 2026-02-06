<template>
    <div class="login-view">
        <h1>Login</h1>
        <form @submit.prevent="login">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<script>
import { getToken, setAuth } from '../clients/UsuarioClient';

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const { token, expiresAt } = await getToken(this.username, this.password);
                if (token) {
                    setAuth(token, expiresAt);
                    this.$router.push({ name: 'home' });
                } else {
                    alert('Credenciales inválidas');
                }
            } catch (error) {
                alert('Credenciales inválidas');
            }
        }
    }
}
</script>

<style>

.login-view {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1.5rem;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5; /* Fondo más claro */
    border-radius: 8px; /* Bordes redondeados */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para profundidad */
}
h1 {
    color: #42b883;
    margin-bottom: 1.5rem;
    font-size: 2rem; /* Título más grande */
    text-align: center; /* Centrar el título */
}
.form-group {
    margin-bottom: 1rem;
}
label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}
input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
button {
    width: 100%;
    padding: 0.75rem;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
}
button:hover {
    background-color: #35495e;
}

</style>