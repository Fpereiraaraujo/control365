

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
  } from "@nextui-org/react";
  import { useMemo, useState } from "react";
  
  type VehicleType = "Motor" | "Trailer";
  type VehicleStatus = "On trip" | "In maintenance" | "Available";
  
  interface Vehicle {
    plate: string;
    fleetNumber: string;
    type: VehicleType;
    model: string;
    status: VehicleStatus;
  }
  
  interface Props {
    vehicles: Vehicle[];
    loading: boolean;
  }
  
  const columns = [
    { name: "Placa", uid: "plate" },
    { name: "Frota", uid: "fleetNumber" },
    { name: "Tipo", uid: "type" },
    { name: "Modelo", uid: "model" },
    { name: "Status", uid: "status" },
  ];
  
  export default function VehicleTable({ vehicles, loading }: Props) {
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
  
    const pages = useMemo(() => Math.ceil(vehicles.length / rowsPerPage), [vehicles]);
  
    const paginatedItems = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return vehicles.slice(start, start + rowsPerPage);
    }, [vehicles, page]);
  
    return (
      <Table
        aria-label="Tabela de veículos"
        isHeaderSticky
        bottomContent={
          <div className="flex justify-center w-full">
            {!loading && (
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={setPage}
              />
            )}
          </div>
        }
        classNames={{ wrapper: "min-h-[200px]" }}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
        </TableHeader>
        <TableBody
          isLoading={loading}
          loadingContent={<Spinner label="Carregando..." />}
          items={paginatedItems}
        >
          {(item) => (
            <TableRow key={item.plate}>
              {(columnKey) => <TableCell>{item[columnKey as keyof Vehicle]}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
  