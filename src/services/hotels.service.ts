import { ModelHotel } from "@/models/hotelModel";
import { hotelController } from "@/networks/apiController/apiController";

export const getHotels = async () => {
    const hotelService = hotelController()
    const res = await hotelService.getHotel();
    let data: ModelHotel[] = [...res]
    return data

}