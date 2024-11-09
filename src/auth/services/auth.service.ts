import axios from 'axios'
import { Profile } from '../../profile/models/Profile';
import { User } from '../models/User';

const instance = axios.create({
    baseURL:import.meta.env.VITE_API_ENDPOINT
});

export const register = async (profile: Profile): Promise<{status: string, message?: string}> => {
    try{
        await instance.post<Profile>(`/entrepreneurs`, profile);
        return {status: 'success', message: 'Usuario registrado satisfactoriamente' };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error en la solicitud:", error.response?.data);
          if (error.response?.status == 409) {
            return { status: "error", message: "El nombre de usuario ya existe. Por favor, ingrese otro." };
          } else if (error.response?.status == 400) {
            return { status: "error", message: `Solicitud inválida: ${error.response.data}` };
          }
        }
        return { status: "error", message: "Hubo un problema con el servidor. Intente de nuevo en unos minutos." };
      }

}

export const login = async(email: string, password: string): Promise<{status: string, data: User | string, message?: string}> => {
    try{
        const response = await instance.get<User>(`/user`, {
            params: {
                email: email,
                password: password
            }
        })
        return {
            status: "success",
            data: response.data
          }
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            return {
              status: "error",
              data: "There was a problem with the server. Please try again in a few minutes.",
              message: "Parece que no estás asociado a una compañía."
            };
          }
          return {
            status: "error",
            data: "An unexpected error occurred."
          };
        }
}