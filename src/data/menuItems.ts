import { MenuItem } from '../components/Menu';
import { restrictions, modifiers } from './batangaWheelData';
import { mapDataToMenu } from '../utils/batangaWheelDataMapper';

export const menuItems: MenuItem[] = [
  {
    name: 'Overview',
    id: 'overview',
    subItems: [
      {
        name: 'Selezione del personaggio',
        id: 'charselect',
      },
      {
        name: 'Clausola "Crazy Play"',
        id: 'crazyplay',
      },
      {
        name: 'Scontro tra arbitri',
        id: 'refereematch',
      },
      {
        name: 'Meccaniche speciali',
        id: 'mechanics',
        subItems: [
          {
            name: 'Stun',
            id: 'm-stun',
          },
        ],
      },
    ],
  },
  {
    name: 'Requisiti',
    id: 'requirements',
  },
  {
    name: 'Modificatori',
    id: 'modifiers',
    subItems: mapDataToMenu(modifiers),
  },
  {
    name: 'Restrizioni',
    id: 'restrictions',
    subItems: mapDataToMenu(restrictions),
  },
];
