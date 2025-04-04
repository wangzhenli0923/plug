import { Country } from '../types';

export const countries: Country[] = [
  {
    id: 'japan',
    name: 'Japan',
    plugTypes: [
      {
        type: 'A',
        imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800',
        description: 'Two flat parallel pins'
      },
      {
        type: 'B',
        imageUrl: 'https://images.unsplash.com/photo-1590735213928-706aa0d22a16?w=800',
        description: 'Two flat parallel pins and a grounding pin'
      }
    ],
    voltage: '100V',
    frequency: '50/60Hz',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    plugTypes: [
      {
        type: 'G',
        imageUrl: 'https://images.unsplash.com/photo-1590735213933-8e6ce8c27838?w=800',
        description: 'Three rectangular pins in a triangular pattern'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
  },
  {
    id: 'usa',
    name: 'United States',
    plugTypes: [
      {
        type: 'A',
        imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800',
        description: 'Two flat parallel pins'
      },
      {
        type: 'B',
        imageUrl: 'https://images.unsplash.com/photo-1590735213928-706aa0d22a16?w=800',
        description: 'Two flat parallel pins and a grounding pin'
      }
    ],
    voltage: '120V',
    frequency: '60Hz',
    imageUrl: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800'
  },
  {
    id: 'france',
    name: 'France',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'E',
        imageUrl: 'https://images.unsplash.com/photo-1590735213930-8e6ce8c27840?w=800',
        description: 'Two round pins with ground pin'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
  },
  {
    id: 'germany',
    name: 'Germany',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800'
  },
  {
    id: 'australia',
    name: 'Australia',
    plugTypes: [
      {
        type: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1590735213935-8e6ce8c27842?w=800',
        description: 'Three flat pins in a V shape'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800'
  },
  {
    id: 'china',
    name: 'China',
    plugTypes: [
      {
        type: 'A',
        imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800',
        description: 'Two flat parallel pins'
      },
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1590735213935-8e6ce8c27842?w=800',
        description: 'Three flat pins in a V shape'
      }
    ],
    voltage: '220V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800'
  },
  {
    id: 'italy',
    name: 'Italy',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      },
      {
        type: 'L',
        imageUrl: 'https://images.unsplash.com/photo-1590735213936-8e6ce8c27843?w=800',
        description: 'Three round pins in a line'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800'
  },
  {
    id: 'spain',
    name: 'Spain',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800'
  },
  {
    id: 'canada',
    name: 'Canada',
    plugTypes: [
      {
        type: 'A',
        imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800',
        description: 'Two flat parallel pins'
      },
      {
        type: 'B',
        imageUrl: 'https://images.unsplash.com/photo-1590735213928-706aa0d22a16?w=800',
        description: 'Two flat parallel pins and a grounding pin'
      }
    ],
    voltage: '120V',
    frequency: '60Hz',
    imageUrl: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?w=800'
  },
  {
    id: 'brazil',
    name: 'Brazil',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'N',
        imageUrl: 'https://images.unsplash.com/photo-1590735213937-8e6ce8c27844?w=800',
        description: 'Three round pins in a triangle'
      }
    ],
    voltage: '127/220V',
    frequency: '60Hz',
    imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800'
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      }
    ],
    voltage: '220V',
    frequency: '60Hz',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800'
  },
  {
    id: 'india',
    name: 'India',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'D',
        imageUrl: 'https://images.unsplash.com/photo-1590735213929-8e6ce8c27845?w=800',
        description: 'Three round pins in a triangle'
      },
      {
        type: 'M',
        imageUrl: 'https://images.unsplash.com/photo-1590735213938-8e6ce8c27846?w=800',
        description: 'Three round pins in a triangle (larger)'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    plugTypes: [
      {
        type: 'A',
        imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800',
        description: 'Two flat parallel pins'
      },
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      }
    ],
    voltage: '220V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    plugTypes: [
      {
        type: 'G',
        imageUrl: 'https://images.unsplash.com/photo-1590735213933-8e6ce8c27838?w=800',
        description: 'Three rectangular pins in a triangular pattern'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800'
  },
  {
    id: 'russia',
    name: 'Russia',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    plugTypes: [
      {
        type: 'A',
        imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800',
        description: 'Two flat parallel pins'
      },
      {
        type: 'B',
        imageUrl: 'https://images.unsplash.com/photo-1590735213928-706aa0d22a16?w=800',
        description: 'Two flat parallel pins and a grounding pin'
      }
    ],
    voltage: '127V',
    frequency: '60Hz',
    imageUrl: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'J',
        imageUrl: 'https://images.unsplash.com/photo-1590735213934-8e6ce8c27839?w=800',
        description: 'Three round pins in a triangle'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800'
  },
  {
    id: 'sweden',
    name: 'Sweden',
    plugTypes: [
      {
        type: 'C',
        imageUrl: 'https://images.unsplash.com/photo-1590735213925-85b4f691b85e?w=800',
        description: 'Two round pins'
      },
      {
        type: 'F',
        imageUrl: 'https://images.unsplash.com/photo-1590735213931-8e6ce8c27841?w=800',
        description: 'Two round pins with side grounding clips'
      }
    ],
    voltage: '230V',
    frequency: '50Hz',
    imageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800'
  }
];