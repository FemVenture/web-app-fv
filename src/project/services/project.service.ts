import axios from 'axios';
import { Projects } from '../models/Projects';

const instance = axios.create({
    baseURL:import.meta.env.VITE_API_ENDPOINT
});

export const getAllProjects = async ():  Promise<{status: string, data: Projects[] | string; message?: string}> => {
    try {
        const response = await instance.get<Projects[]>(`/projects`);
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

export const getProjectById = async (id: string): Promise<{status: string, data: Projects | string; message?: string}> => {
    try {
        const response = await instance.get<Projects>(`/projects/${id}`);
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

export const getImageByProjectId = async (projectId: string): Promise<{status: string, data: string[] | string; message?: string}> => {
    try {
        const response = await instance.get<string[]>(`/project-pictures/project/${projectId}`);
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

export const getProjectByEntrepreneurId = async (id: number): Promise<{status: string; data: string[] | string; message?: string}> => {
    try {
        const response = await instance.get<string[]>(`/projects/entrepreneur/${id}`);
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