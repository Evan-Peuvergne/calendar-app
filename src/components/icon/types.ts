export const IconsList = [
  'calendar-fill',
 'calendar',
 'document-fill',
 'document',
 'flag-fill',
 'flag',
 'home-fill',
 'home',
 'more',
 'plus',
 'search', 
] as const

export type Icons = typeof IconsList[number]
