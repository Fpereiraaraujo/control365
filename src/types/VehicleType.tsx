export type VehicleStatus = 'On trip' | 'In maintenance' | 'Available';

export type VehicleType = 'Motor' | 'Trailer'; 

export interface VehicleResponse {
  plate: string;          // Placa
  fleetNumber: string;    // Frota
  type: VehicleType;      // Tipo
  model: string;          // Modelo
  status: VehicleStatus;  // Status
}

// Renomeie a interface para algo mais descritivo
export interface VehicleItem {
  items: VehicleResponse;
}