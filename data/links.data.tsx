import { NavigationInterface } from '@/app/interface/navigation.interface'

export const PAGES = {
  HOME: 0,
  ABOUT: 1
}

export const LINKS:NavigationInterface[] = [{
  label: 'Home',
  route: '/',
  sections: [
    'frontal',
    'quality',
    'work',
    'contact'
  ]
},
{
  label: 'About',
  route: '/about',
  sections: [
    'frontal',
    'technology',
    'experience'
  ]
},
{
  label: 'Projects',
  route: '/projects',
  sections: []
}]

export default function getRouteWithSection (page: number, section: number) {
  return LINKS[page].route + '#' + LINKS[page].sections[section]
}
