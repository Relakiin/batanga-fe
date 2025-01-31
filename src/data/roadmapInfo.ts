export interface RoadmapInfo {
  text: string;
  done: boolean;
  subitems?: RoadmapInfo[];
}

export const roadmap: RoadmapInfo[] = [
  {
    text: 'Rilascio Iniziale (alpha)',
    done: true,
  },
  {
    text: 'Tournament Edition (v1)',
    done: false,
    subitems: [
      {
        text: 'Special Rolls (eventi aggiuntivi per roll speciali come Grog e Bussola magica)',
        done: false,
      },
      {
        text: 'Settings (cambia ciò che può uscire dalla ruota)',
        done: false,
      },
      {
        text: 'Tournament Mode (flusso automatico per Player 1 vs Player 2)',
        done: false,
      },
    ],
  },
  {
    text: 'User Update (v2)',
    done: false,
    subitems: [
      {
        text: 'Bata Testing (vota e commenta i nuovi change)',
        done: false,
      },
      {
        text: 'Register & Login (salva le tue configurazioni personalizzate)',
        done: false,
      },
    ],
  },
];
