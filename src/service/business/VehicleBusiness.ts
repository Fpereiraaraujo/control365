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
        id: item.id,;            
        plate: item.plate,;         
        fleet: item.fleet;
        type: item.type as VehicleType;      
        model: item.model;   
        nameOwner: items.nameOwner;
        status: items.status;  
        createdAt: items.createdAt; 
      }));
    },
  };
  
  export default VehicleBusiness;