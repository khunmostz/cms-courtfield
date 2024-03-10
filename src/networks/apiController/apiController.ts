import apiService from '@/networks/apiService/apiService';

export const hotelController = (configService = {}) => {
    const service = apiService(configService);
    return {
        getHotel: () => {
            return service.get();
        },
    };
};