import { MenuItem } from '../components/Menu';
import { BatangaTableData, BatangaWheelData } from '../models/BatangaWheelData';
import { RouletteItem } from 'react-hook-roulette';

export const mapWheelOptions = (data: BatangaWheelData[]): RouletteItem[] => {
  return data.map((entry) => {
    return {
      name: entry.name,
    };
  });
};

export const mapDataToMenu = (data: BatangaWheelData[]): MenuItem[] => {
  return data.map((entry) => {
    return {
      name: entry.name,
      id: entry.id,
    };
  });
};

export const mapDataToTableEntries = (data: BatangaTableData[]) => {
  return data
    .map((entry) => {
      return (
        <tr>
          <td>{entry.player || '-'}</td>
          <td>{entry.type}</td>
          <td>{entry.data.name}</td>
          <td>
            <button
              className="btn btn-xs"
              onClick={() => {
                if (document) {
                  (
                    document.getElementById(
                      `modal_${entry.data.id}`
                    ) as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              Visualizza
            </button>
            <dialog id={`modal_${entry.data.id}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{entry.data.name}</h3>
                <p className="py-4">{entry.data.description}</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </td>
        </tr>
      );
    })
    .reverse();
};

export const mapDataToCollapse = (data: BatangaTableData[]) => {
  return data
    .map((entry) => {
      return (
        <div>
          <details className="collapse collapse-arrow bg-base-300">
            <summary className="collapse-title text-s font-medium">
              {entry.player && 'Player ' + entry.player + '| '} {entry.type} |{' '}
              {entry.data.name}
            </summary>
            <div className="collapse-content">
              <p>{entry.data.description}</p>
            </div>
          </details>
          <dialog id={`modal_${entry.data.id}`} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{entry.data.name}</h3>
              <p className="py-4">{entry.data.description}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      );
    })
    .reverse();
};
