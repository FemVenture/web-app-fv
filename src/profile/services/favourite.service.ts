// import axios from 'axios';

// const instance = axios.create({
//     baseURL:import.meta.env.VITE_API_ENDPOINT
// });

// export const register = async (): Promise<{status: string, message?: string}> => {
//     try{
//         await instance.post<Profile>(`/entrepreneurs`, profile);
//         return {status: 'success', message: 'Usuario registrado satisfactoriamente' };
//     } catch (error: unknown) {
//         if (axios.isAxiosError(error)) {
//           console.error("Error en la solicitud:", error.response?.data);
//           if (error.response?.status == 409) {
//             return { status: "error", message: "El nombre de usuario ya existe. Por favor, ingrese otro." };
//           } else if (error.response?.status == 400) {
//             return { status: "error", message: `Solicitud inválida: ${error.response.data}` };
//           }
//         }
//         return { status: "error", message: "Hubo un problema con el servidor. Intente de nuevo en unos minutos." };
//       }

// }