import axios from 'axios';
import { getToken } from './UsuarioClient.js';

const URL = 'http://localhost:8081/matricula/api/v1.0/estudiantes';

// Configurar interceptor de axios para agregar el token automáticamente
axios.interceptors.request.use(async (config) => {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const ConsultarTodos = async () => {
    const data = axios.get(URL).then(response => response.data);
    console.log(data);
    return data;
}
 
const consutarPorId = async (id) => {
    const data = axios.get(`${URL}/${id}`).then(response => response.data);
    console.log(data);
    return data;
}
 
const guardar = async (body) => {
    const data = axios.post(URL, body).then(response => response.data);
    console.log(data);
    return data;
}
 
const actualizar = async (id, body) => {
    const data = axios.put(`${URL}/${id}`, body).then(response => response.data);
    console.log(data);
    return data;
}
 
const actualizarParcial = async (id, body) => {
    const data = axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(response => response.data);
    console.log(data);
    return data;
}
 
const borrar = async (id) => {
    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(response => response.data);
    console.log(`Estudiante con id ${id} eliminado`);
}
 
export async function ConsultarTodosFachada() {
    return await ConsultarTodos();
}
 
export async function ConsultarPorIdFachada(id) {
    return await consutarPorId(id);
}
 
export async function GuardarFachada(body) {
    return await guardar(body);
}
 
export async function ActualizarFachada(id, body) {
    return await actualizar(id, body);
}
 
export async function ActualizarParcialFachada(id, body) {
    return await actualizarParcial(id, body);
}
 
export async function BorrarFachada(id) {
    await borrar(id);
}
 