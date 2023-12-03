import { COLOR_INTERFACE } from '@/app/interface/color.interface'

export const COLOR_STATUS_VALUE:COLOR_INTERFACE = {
  white: {
    '--background': 'var(--white)',
    '--section': 'var(--soft-brown)',
    '--font-color': 'var(--hard-brown)',
    '--font-color-navbar': 'var(--white)',
    '--inverse-font-color': 'var(--white)',
    '--footer-container': 'var(--hard-brown)',
    '--navbar': 'var(--soft-brown)',
    '--logo': 'var(--hard-brown)'
  },
  middle: {
    '--background': 'var(--soft-brown)',
    '--section': 'var(--white)',
    '--font-color': 'var(--white)',
    '--font-color-navbar': 'var(--hard-brown)',
    '--inverse-font-color': 'var(--hard-brown)',
    '--footer-container': 'var(--hard-brown)',
    '--navbar': 'var(--white)',
    '--logo': 'var(--white)'
  },
  dark: {
    '--background': 'var(--hard-brown)',
    '--section': 'var(--soft-brown)',
    '--font-color': 'var(--white)',
    '--font-color-navbar': 'var(--white)',
    '--inverse-font-color': 'var(--hard-brown)',
    '--footer-container': 'var(--white)',
    '--navbar': 'var(--hard-brown)',
    '--logo': 'var(--white)'
  }
}
