import { useEffect, useState } from "react";
import Header from "../components/Header";
import MapTracker from "../components/MapTracker";
import VehicleTable from "../components/VehicleTable";
import VehicleBusiness from "../service/business/VehicleBusiness";
import { VehicleResponse } from "../types/VehicleType";




export default function Dashboard() {
const [vehicles, setVehicles] = useState<VehicleResponse[]>([]);

async function fetchVehicles(){
    try{
        const value = await VehicleBusiness.fetchVehicles()
        console.log("value dos veiculos",value)
        setVehicles(value)
    }catch(error){
        throw new Error("Error fetching vehicles")
    }
}

useEffect(() => {
    void fetchVehicles();
})
  return (
    <div className="bg-[#0d1117] min-h-screen p-6 text-white">
      <Header />
      {/* Filtros, tabs etc. aqui */}
      <section className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Mapa rastreador</h2>
        {/* <MapTracker vehicles={mockVehicles} /> */}
      </section>
      <section className="mt-8">
        <VehicleTable vehicles={vehicles} />
      </section>
    </div>
  );
}
