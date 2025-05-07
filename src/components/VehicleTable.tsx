import { VehicleResponse } from "../types/VehicleType";



interface Props {
  vehicles: VehicleResponse[];
}

export default function VehicleTable({ vehicles }: Props) {
  return (
    <table className="min-w-full text-sm text-white">
      <thead>
        <tr className="bg-gray-800 text-left">
          <th>Plate</th>
          <th>Fleet</th>
          <th>Type</th>
          <th>Model</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((v, index) => (
          <tr key={index} className="border-t border-gray-700">
            <td>{v.plate}</td>
            <td>{v.fleetNumber}</td>
            <td>{v.type}</td>
            <td>{v.model}</td>
            <td>{v.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
