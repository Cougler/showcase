export type AppType = 'concept' | 'shipped' | 'in-development';
export type SlideLayout = 'standard' | 'bento';

export interface BentoCell {
  src: string;
  area: string;
  fit?: 'cover' | 'contain';
}

export interface ShowcaseSlide {
  id: string;
  appName: string;
  type: AppType;
  url?: string;
  description?: string;
  layout?: SlideLayout;
  images?: string[];
  imageFit?: 'contain' | 'cover';
  bentoCells?: BentoCell[];
  bentoAreas?: string;
  bentoCols?: string;
  bentoRows?: string;
}

export const slides: ShowcaseSlide[] = [
  {
    id: 'flowki',
    appName: 'Flowki',
    type: 'shipped',
    url: 'flokiapp.com',
    description: 'Built and shipped for individual contributors who found most task managers either too bloated or too bare. Designed to give designers the right amount of structure without the overhead. Since redesigned and relaunched as Hierarch.',
    layout: 'bento',
    bentoAreas: '"hero r1" "hero r2" "hero r3"',
    bentoCols: '2fr 1fr',
    bentoRows: '1fr 1fr 1fr',
    bentoCells: [
      { src: '/Frame 121.png', area: 'hero', fit: 'cover' },
      { src: '/Frame 122.png', area: 'r1',   fit: 'cover' },
      { src: '/Frame 124.jpg', area: 'r2',   fit: 'cover' },
      { src: '/Frame 125.jpg', area: 'r3',   fit: 'cover' },
    ],
  },
  {
    id: 'hierarch',
    appName: 'Hierarch',
    type: 'in-development',
    url: 'hierarchical.app',
    description: 'The next evolution of Flowki — rebuilt from scratch with a deeper feature set, a workflow tuned specifically for designers, and the kind of polish that only comes from using your own tool every day.',
    layout: 'bento',
    bentoAreas: '"hero r1" "hero r2" "hero r3"',
    bentoCols: '2fr 1fr',
    bentoRows: '1fr 1fr 1fr',
    bentoCells: [
      { src: '/Frame 128.jpg', area: 'hero', fit: 'cover' },
      { src: '/Frame 127.jpg', area: 'r1',   fit: 'cover' },
      { src: '/Frame 121.jpg', area: 'r2',   fit: 'cover' },
      { src: '/Frame 126.jpg', area: 'r3',   fit: 'cover' },
    ],
  },
  {
    id: 'plants-are-people-too',
    appName: 'Plants Are People Too',
    type: 'concept',
    description: 'A plant care concept that gives each of your plants a distinct personality — making them harder to ignore, and a lot harder to kill.',
    layout: 'bento',
    bentoAreas: '"hero dash" "hero detail" "hero sched" "hero stats"',
    bentoCols: '2.5fr 1fr',
    bentoRows: '1fr 1fr 1fr 1fr',
    bentoCells: [
      { src: '/Plants.png',                 area: 'hero',   fit: 'cover' },
      { src: '/Desktop - Dashboard.png',    area: 'dash',   fit: 'cover' },
      { src: '/Desktop - Plant Detail.png', area: 'detail', fit: 'cover' },
      { src: '/Desktop - Schedule.png',     area: 'sched',  fit: 'cover' },
      { src: '/Desktop - Stats.png',        area: 'stats',  fit: 'cover' },
    ],
  },
  {
    id: 'adonde',
    appName: 'Adonde',
    type: 'concept',
    description: 'An AR concept for tagging everyday objects around your home so you can find them exactly where you left them.',
    layout: 'standard',
    images: ['/Adonde.png'],
  },
];
