import { BatangaWheelData } from '../models/BatangaWheelData';
export const restrictions: BatangaWheelData[] = [
  {
    name: 'Aggiungi un posto a tavola',
    description: 'Il tuo arbitro controlla il lato destro del tuo controller.',
    id: 'aggiungiunposto',
  },
  {
    name: 'Ammutinamento',
    description: 'Gioca Olimar senza pikmin.',
    id: 'ammutinamento',
  },
  {
    name: 'Ash Ketchum',
    description:
      'Gioca Pokemon Trainer. Ad ogni mossa colpita, cambia immediatamente Pokemon. Non puoi cambiare Pokemon altrimenti.',
    id: 'ash',
  },
  {
    name: 'Bataranga',
    description:
      "Ogni volta che esegui una qualsiasi mossa, immediatamente dopo dovrai eseguire la mossa con l'input opposto, nella direzione opposta (se applicabile). Le mosse neutrali sono concesse e non richiedono una ripetizione.",
    id: 'bataranga',
  },
  {
    name: 'Bussola Magica',
    description:
      "Verrà rollata una direzione cardinale casuale: ogni mossa che fai deve avere l'input rivolto verso quella direzione.",
    id: 'bussola',
    extraSpin: { options: ['Nord', 'Sud', 'Est', 'Ovest'] },
  },
  {
    name: 'Chi va piano…',
    id: 'chivapiano',
    description:
      'Non puoi mai correre o scattare. Il Dash Attack istantaneo è permesso, a patto che non appaia la nuvoletta di fumo.',
  },
  {
    name: 'Comeback story',
    id: 'comeback',
    description:
      "All’inizio del match dovrai suicidarti per rimanere con solo una stock, ma l'avversario ha una restrizione extra.",
  },
  {
    name: 'Cromofumo',
    id: 'cromo',
    description:
      'Gioca con i Joy-Con, ma le mani sono invertite (Joy-Con destro in mano sinistra e viceversa). Siediti con le braccia incrociate verso fuori.',
  },
  {
    name: 'Cuor di leone',
    id: 'cuordileone',
    description:
      'Non puoi mai scudare, rollare, spotdodgiare, airdodgiare o fare roll getup dal bordo.',
  },
  {
    name: 'Enigmista',
    id: 'enigmista',
    description:
      "Ogni minuto, l'arbitro ti farà un indovinello. Se non rispondi entro il prossimo, perdi la stock. Devi aver risposto all'indovinello per vincere il match. Se il match finisce per suicidio dell'avversario, questa restrizione non conta.",
  },
  {
    name: 'Grog',
    id: 'grog',
    description: 'Gioca con i comandi di Shirley.',
    special: true,
  },
  {
    name: 'Handicap',
    id: 'handicap',
    description: 'Imposta 60% di handicap (o 80 HP in Stamina).',
  },
  {
    name: 'Incontinenza',
    id: 'incontinenza',
    description: 'Gioca Wario. Ogni volta che colpisci una mossa, fai downB.',
  },
  {
    name: 'Infame',
    id: 'infame',
    description: 'Dopo ogni mossa colpita devi immediatamente tauntare.',
  },
  {
    name: 'Ingiustizia',
    id: 'ingiustizia',
    description:
      'Una CPU random livello 7 (Fuoco amico OFF) si aggiunge nel team del tuo avversario.',
  },
  {
    name: 'Intellettuale',
    id: 'intellettuale',
    description:
      "Devi leggere una pagina di un libro ad alta voce entro la fine del match, altrimenti il match sarà perso. Se l'avversario muore per suicidio, puoi saltare 5 righe. Se il match finisce per suicidio dell'avversario, questa restrizione non conta.",
  },
  {
    name: 'Mani scivolose',
    id: 'mani',
    description:
      'Non puoi attaccarti al bordo o usare alcun tipo di presa, incluse command grab che fanno uso delle mani.',
  },
  {
    name: 'Modena',
    id: 'modena',
    description: 'Devi giocare con la visione annebbiata (un velo semi-opaco).',
  },
  {
    name: 'Piedi pesanti',
    id: 'piedi',
    description: "Non puoi mai usare il doppio salto o l'upB.",
  },
  {
    name: 'Purista',
    id: 'purista',
    description: 'Non puoi mai usare special.',
  },
  {
    name: 'Sapientino',
    id: 'sapientino',
    description:
      'Ogni 20 secondi, dovrai rispondere ad una domanda di cultura generale vero/falso. Se rispondi male, sarai stunnato e non potrai fare nessun input per 3 secondi. Se non rispondi entro la prossima domanda, perdi una stock.',
  },
  {
    name: 'Schizzinoso',
    id: 'schizzinoso',
    description: 'Devi giocare con i guanti.',
  },
  {
    name: 'Specchio riflesso',
    id: 'specchio',
    description: "Devi giocare con il controller girato dall'altra parte.",
  },
  {
    name: 'The Best Mario',
    id: 'bestmario',
    description:
      'Gioca con l\'overworld theme di New Super Mario Bros. Ad ogni "Bah", posa il controller e fai il ballo del Koopa. Se sbagli il tempismo del ballo, perdi una stock.',
  },
  {
    name: 'The Penguin',
    id: 'penguin',
    description:
      'Devi castare il gameplay del tuo avversario, con meno pause possibili.',
  },
  {
    name: 'Vertiginoso',
    id: 'vertiginoso',
    description:
      'Perdi una stock se atterri, per qualunque motivo, su una piattaforma volante. Se muori da una spike, perdi il match. Il match sarà giocato su Smashville (Hazards ON), indipendentemente da altre restrizioni o modificatori.',
  },
];

export const modifiers: BatangaWheelData[] = [
  {
    name: '20XX',
    id: '20xx',
    description: 'Il match è giocato a velocità massima e gravità alta.',
  },
  {
    name: 'Alcool test',
    id: 'alcool',
    description:
      "I player dovranno recitare l'alfabeto al contrario, una lettera a testa. Se rispondono in modo errato o non rispondono entro 3 secondi, non saranno idonei a giocare e saranno stunnati per 3 secondi.",
  },
  {
    name: 'Caccia al tesoro',
    id: 'tesoro',
    description:
      "Spawnano parti del Dragoon. Oltre alla morte dell'avversario, il match può essere vinto assemblando l'oggetto. Lo spawn rate degli oggetti è impostato a Basso.",
  },
  {
    name: 'Cavernicolo',
    id: 'cavernicolo',
    description:
      'Entrambi i player devono giocare con i comandi base, e possono usare solamente il Control Stick e il pulsante A. Non ci sono restrizioni.',
  },
  {
    name: 'Chaos',
    id: 'chaos',
    description:
      'Aggiungi un altro modificatore a questo. Entrambi i giocatori hanno una restrizione extra.',
    special: true,
  },
  {
    name: 'Disattento',
    id: 'disattento',
    description: 'Il match è giocato su Mirko Disattento.',
  },
  {
    name: 'Disattento 2',
    id: 'disattento2',
    description: 'Spawnano Smash Ball false e Funghi avvelenati.',
  },
  {
    name: 'Ditto',
    id: 'ditto',
    description: 'I giocatori condivideranno le loro restrizioni.',
  },
  {
    name: "Fame d'oro",
    id: 'famedoro',
    description:
      "L'audio di gioco è rimpiazzato da una canzone a scelta dell'arbitro, che i player dovranno canticchiare (anche se non la conoscono).",
  },
  {
    name: 'Gara di poesia',
    id: 'poesia',
    description:
      "Ogni 30 secondi un arbitro dirà una parola casuale. Il primo giocatore a dire una parola che rima stunnerà l'altro giocatore per 3 secondi.",
  },
  {
    name: 'Giant',
    id: 'giant',
    description: 'Entrambi i giocatori sono giganti.',
  },
  {
    name: 'God save the Queen',
    id: 'queen',
    description:
      'I player hanno una Peach/Daisy livello 1 nel loro team. Se la principessa perde tutte le stock, il giocatore perde il game.',
  },
  {
    name: 'Herokaze',
    id: 'herokaze',
    description:
      'Il match diventa una partita di Herokaze. Non ci sono restrizioni.',
  },
  {
    name: 'Il pavimento è lava',
    id: 'lava',
    description:
      "Il match viene giocato su Yoshi's Story. Se un player atterra o rimbalza sulla piattaforma principale, perde una stock.",
  },
  {
    name: 'Inverno',
    id: 'inverno',
    description: 'Il match sarà giocato su Final Destination ghiacciato.',
  },
  {
    name: 'Ludopatia',
    id: 'ludopatia',
    description:
      'Entrambi i giocatori tirano un dado a 6 facce: il numero finale diviso 2 (arrotondato per eccesso) indica quante restrizioni avrà il giocatore.',
    special: true,
  },
  {
    name: 'Marcia dei Dedede',
    id: 'dedede',
    description:
      'Entrambi i player dovranno attraversare Pac-Land (Hazards ON) utilizzando King Dedede con una stock. Il downB deve essere costantemente in carica. I player non possono attaccarsi a vicenda. Non ci sono restrizioni.',
  },
  {
    name: 'Rust',
    id: 'rust',
    description:
      'Spawnano Bastoni. Lo spawn rate degli oggetti è impostato a Medio.',
  },
  {
    name: 'Sabbat temporale',
    id: 'sabbat',
    description:
      'Spawnano Timer. Lo spawn rate degli oggetti è impostato a Basso.',
  },
  {
    name: 'Stamina',
    id: 'stamina',
    description:
      'Il match sarà giocato in modalità Stamina. Entrambi i giocatori hanno 100 HP e 3 stock (Con la restrizione Handicap un giocatore inizierà con 80 HP).',
  },
  {
    name: 'Stregoneria',
    id: 'stregoneria',
    description: 'Entrambi i giocatori avranno Screw Attack equipaggiato.',
  },
  {
    name: 'Striteru',
    id: 'striteru',
    description: 'Lo Smash Meter è attivato.',
  },
  {
    name: 'The Dog',
    id: 'thedog',
    description:
      'Entrambi i giocatori dovranno sobbalzare ad ogni colpo dato o ricevuto.',
  },
  {
    name: 'WarioWare',
    id: 'warioware',
    description: 'Il match sarà giocato su WarioWare con Hazard ON.',
  },
  { name: 'Zen', id: 'zen', description: 'Entrambi i giocatori sono bendati.' },
];
