import { VehicleItem, VehicleResponse } from "../../../../types/VehicleType";
import VehicleApiBase from "../base/VehicleApiBase";

export default class VehicleEndpoint extends VehicleApiBase {
    constructor() {
        super("recruitment/vehicle");
    }

    async getAllVehicles(pagination: { page: number; limit: number }): Promise<VehicleItem> {
        const response = await this.axios().get(`vehicle/list-with-paginate`, {
            params: {
                page: pagination.page,
                limit: pagination.limit,
            },
        });
        return response.data as VehicleItem;
    }
}