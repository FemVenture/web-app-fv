import axios from 'axios';
import { Profile } from '../models/Profile';

const instance = axios.create({
    baseURL:import.meta.env.VITE_API_ENDPOINT
});

export const getEntrepreneurById = async (id: string):  Promise<{status: string, data: Profile | string; message?: string}> => {
    try {
        const response = await instance.get<Profile>(`/entrepreneurs/${id}`);
        // const response = await instance.get(`/entrepreneurs/${id}`);
        return {status: 'success', data: response.data };
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            return {
                status: "error",
                data: "There was a problem with the server. Please try again in a few minutes.",
                message: error.message
            };
        }
        return {
            status: "error",
            data: "An unexpected error occurred."
        };
    }
}