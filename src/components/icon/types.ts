export const IconsList = [
  'calendar-fill',
 'calendar',
 'home-fill',
 'home', 
] as const

export type Icons = typeof IconsList[number]
