export type AppType = 'concept' | 'shipped';

export interface ShowcaseSlide {
  id: string;
  appName: string;
  type: AppType;
  images: string[]; // paths in /public
}

// Add slides here — images go in /public/
export const slides: ShowcaseSlide[] = [
  // Example placeholder — replace with real entries
  {
    id: 'example',
    appName: 'App Name',
    type: 'concept',
    images: [],
  },
];
