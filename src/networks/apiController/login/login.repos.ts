import apiService from "@/networks/apiService/apiService";
import { LoginDTO } from "./dto/login.dto";


export const loginContoller = (configService: any = {}) => {
    const service = apiService(configService);

    return {
        login: (params?: LoginDTO) => {
            return service.post('/login', { ...params });
        },
    };
};