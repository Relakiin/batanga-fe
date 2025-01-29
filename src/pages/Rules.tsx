import Menu from '../components/Menu';
import { menuItems } from '../data/menuItems';
import { BatangaWheelData } from '../models/BatangaWheelData';
import { modifiers, restrictions } from '../data/batangaWheelData';

function Rules() {
  const buildDataSection = (data: BatangaWheelData[]) => {
    return data.map((entry) => {
      return (
        <div id={entry.id}>
          <h2 className="text-2xl font-bold text-base-content">{entry.name}</h2>
          <p className="text-primary">{entry.description}</p>
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-6 gap-4 p-4 bg-base-200 min-h-screen">
      {/* Sidebar Menu */}
      <div className="col-span-1 sticky top-[4rem] h-50">
        <Menu items={menuItems} />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start gap-4 col-span-4">
        <h2 className="text-3xl font-bold text-base-content">
          Ruota del Batanga v3.1
        </h2>
        <hr></hr>
        <div className="text-primary">
          <p>
            Per giocare vanno girate le 2 ruote, prima quella dei{' '}
            <b>modificatori</b>, che si applicano ad entrambi i player, e poi la
            seconda ruota delle <b>restrizioni</b>, che si applicano al player
            singolo, perciò ogni player dovrà girarla per ricevere la sua
            restrizione.
          </p>
          <p>
            Ci saranno 2 arbitri (uno assegnato a ciascun player) a moderare la
            partita per assicurarsi che le restrizioni siano seguite.{' '}
          </p>
          <p>
            <u>
              Infrangere una restrizione o modificatore comporta la perdita di
              una stock.
            </u>
          </p>
          <p>
            In modalità torneo, la restrizione selezionata dalla ruota viene
            rimossa dagli spin seguenti, fino alla fine del set. Non si applica
            ai modificatori.
          </p>

          <p id="charselect">
            Selezione del personaggio A discrezione dell’organizzatore, si può
            decidere se ogni player dovrà giocare con Random o se potrà
            selezionare il proprio personaggio. Nell’ultimo caso, il personaggio
            va selezionato prima di girare le ruote, e se esce una restrizione o
            un modificatore che richiede un personaggio specifico, il player
            sarà comunque costretto a giocarlo. I creatori del ruleset
            consigliano comunque di giocare Random.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-base-content">Modificatori</h2>
        <hr></hr>
        {buildDataSection(modifiers)}
        <h2 className="text-3xl font-bold text-base-content">Restrizioni</h2>
        <hr></hr>
        {buildDataSection(restrictions)}
      </div>
    </div>
  );
}

export default Rules;
