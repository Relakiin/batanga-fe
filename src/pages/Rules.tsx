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
        </div>
        <h2 id="charselect" className="text-3xl font-bold text-base-content">
          Selezione del personaggio
        </h2>
        <hr></hr>
        <div className="text-primary">
          <p>Il ruleset competitivo prevede che i personaggi siano random.</p>
          <p>
            A discrezione dell’organizzatore, si può decidere se permettere ai
            player di selezionare il proprio personaggio. In questo caso, il
            personaggio va selezionato prima di girare le ruote, e se esce una
            restrizione o un modificatore che richiede un personaggio specifico,
            il player sarà comunque costretto a giocarlo.
          </p>
        </div>
        <h2 id="crazyplay" className="text-3xl font-bold text-base-content">
          Clausola "Crazy Play"
        </h2>
        <hr></hr>
        <div className="text-primary">
          <p>
            Se si infrange una regola per dare con successo il colpo finale di
            uno scontro,{' '}
            <b>
              <u>non ci saranno penalità.</u>
            </b>
          </p>
        </div>
        <h2 id="refereematch" className="text-3xl font-bold text-base-content">
          Scontro tra arbitri
        </h2>
        <hr></hr>
        <div className="text-primary">
          <p>
            Se, per qualsiasi motivo, si conclude un match dove:{' '}
            <ol className="list-decimal ml-[2.5rem]">
              <li>Entrambi i giocatori hanno infranto una regola</li>
              <li>
                Nessun arbitro ha segnalato il fatto, perciò nessun player è
                stato punito
              </li>
            </ol>{' '}
            Il match sarà ritenuto invalido, e andrà giocato un game di Ruota
            del Batanga ad una stock tra i due arbitri per determinare l'esito
            della partita.
          </p>
        </div>
        <h2 id="mechanics" className="text-3xl font-bold text-base-content">
          Meccaniche speciali
        </h2>
        <hr></hr>
        <h2 className="text-2xl font-bold text-base-content" id="m-stun">
          Stun
        </h2>
        <p className="text-primary">
          Quando un giocatore è stunnato, l'arbitro metterà una mano sulla sua
          spalla per la durata dello stordimento. Finchè l'arbitro non toglierà
          la mano, il giocatore non potrà fare nessun tipo di input.
        </p>
        <h2 id="requirements" className="text-3xl font-bold text-base-content">
          Requisiti
        </h2>
        <hr></hr>
        <p className="text-primary">
          Alcuni modificatori o restrizioni hanno dei requisiti particolari. Se
          non è possibile recuperare il necessario, si può{' '}
          <b>rerollare o rimuovere</b>
          l’elemento associato dalla ruota.{' '}
          <ol className="list-disc ml-[2.5rem]">
            <li>
              <i>Sapientino, Enigmista, The Best Mario, Fame d’oro</i>: <b>connessione
              Internet</b> (per cercare domande, indovinelli e canzoni)
            </li>
            <li>
              <i>Schizzinoso</i>: <b>un paio di guanti ingombranti</b> (da forno/da neve)
            </li>
            <li>
              <i>Modena</i>: <b>un velo attraverso il quale il giocatore può vedere male</b>
            </li>
            <li>
              <i>Intellettuale</i>: <b>un libro</b> (idealmente non troppo denso nel numero di
              parole per pagina)
            </li>
            <li><i>Inverno</i>: <b>Final Destination giacchiata</b> (codice stage: TBA)</li>
            <li><i>Disattento</i>: <b>Mirko Disattento</b> (codice stage: TBA)</li>
          </ol>{' '}
        </p>
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
