import { VehicleResponse } from "../types/VehicleType";


interface Props {
  vehicles: VehicleResponse[];
}

export default function MapTracker({ vehicles }: Props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      
      <div className="h-96 bg-gray-900 text-white flex justify-center items-center">
        [Mapa Aqui]
      </div>
    </div>
  );
}
