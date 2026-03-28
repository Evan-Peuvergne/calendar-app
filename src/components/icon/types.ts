export const IconsList = [
  'bin-fill',
 'bin',
 'bottom-to-right',
 'calendar-fill',
 'calendar',
 'close',
 'copy-1',
 'copy-fill',
 'copy',
 'document-fill',
 'document',
 'external',
 'flag-fill',
 'flag',
 'home-fill',
 'home',
 'more',
 'plus',
 'search', 
] as const

export type Icons = typeof IconsList[number]
