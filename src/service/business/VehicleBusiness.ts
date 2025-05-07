import { VehicleResponse, VehicleType } from "../../types/VehicleType";
import VehicleApi from "../api/Vehicles/VehiclesApi";

interface VehicleApiResponse {
    items: VehicleResponse[] | VehicleResponse; 
  }

  const VehicleBusiness = {
    async fetchVehicles(): Promise<VehicleResponse[]> {
      const response: VehicleApiResponse = await VehicleApi.vehicle.getAllVehicles({ page: 1, limit: 10 });

      const items = Array.isArray(response.items) ? response.items : [response.items];
  
      return items.map((item) => ({
        plate: item.plate,
        fleetNumber: item.fleetNumber,
        type: item.type,
        model: item.model,
        status: item.status,
      }));
    },
  };
  
  export default VehicleBusiness;