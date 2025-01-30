import { BatangaTableData } from "../models/BatangaWheelData";
import { mapDataToTableEntries } from "../utils/batangaWheelDataMapper";

interface BatangaTableProps {
  data: BatangaTableData[] | null
}

const BatangaTable = ({data}: BatangaTableProps) => {
  return (
    <div className="overflow-y-auto h-[27rem]">
      <table className="table table-pin-cols table-pin-rows table-xs lg:table-md bg-base-300">
        {/* head */}
        <thead>
          <tr>
            <th>Player</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Descrizione</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data && data?.length > 0 ? mapDataToTableEntries(data) : (<tr><td></td><td></td><td></td><td></td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default BatangaTable;
