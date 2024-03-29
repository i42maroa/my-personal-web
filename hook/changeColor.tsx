import { COLOR_STATUS_VALUE } from '@/data/color.data'

export default function changeRootColors (state: string) {
  for (const [key, value] of Object.entries(COLOR_STATUS_VALUE[state])) {
    document.documentElement.style.setProperty(key, value)
  }
}
