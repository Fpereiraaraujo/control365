export type VehicleStatus = 'active' | 'In maintenance' | 'Available';

export type VehicleType = 'vehicle' | 'others'; 

export interface VehicleResponse {
  id: string;            
  plate: string;         
  fleet: string;
  type: VehicleType;      
  model: string;   
  nameOwner: string;
  status: VehicleStatus;  
  createdAt: string; 
}

export interface VehicleItem {
  items: VehicleResponse;
}