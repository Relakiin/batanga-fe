import { useScreenDetector } from '../hooks/useScreenDetector';
import { BatangaTableData } from '../models/BatangaWheelData';
import {
  mapDataToCollapse,
  mapDataToTableEntries,
} from '../utils/batangaWheelDataMapper';

interface BatangaTableProps {
  data: BatangaTableData[] | null;
}

const BatangaTable = ({ data }: BatangaTableProps) => {
  const { isMobile } = useScreenDetector();
  return isMobile ? (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="bg-base-200 text-base-content min-h-screen mt-[4.5rem] w-80">
          {/* Sidebar content here */}
          {data && data?.length > 0 ? (
            <div className="flex flex-col p-2 gap-2">
              {mapDataToCollapse(data)}
            </div>
          ) : (
            <span className="text-xl p-4">La cronologia è vuota!</span>
          )}
        </ul>
      </div>
    </div>
  ) : (
    <div className="overflow-y-auto h-[27rem]">
      <table className="table table-pin-cols table-pin-rows table-xs lg:table-md bg-base-300">
        {/* head */}
        <thead>
          <tr>
            <th>Player</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          {data && data?.length > 0 ? (
            mapDataToTableEntries(data)
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BatangaTable;
