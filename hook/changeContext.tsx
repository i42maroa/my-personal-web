import { COLOR_STATUS_VALUE } from '@/data/color.data'
import { STATE_TOGGLE } from '@/data/state-toggle.data'
import changeRootColors from './changeColor'
import { playCoffeeMachineSound } from './playCoffeeMachineSound'

export interface CONTEXT_STATE {num:number, show:boolean};

export default function changeContextState (state:CONTEXT_STATE, newState: CONTEXT_STATE) :CONTEXT_STATE {
  console.log(state, 'state', newState, 'newState')
  if (state.num !== newState.num) {
    console.log('enter')
    const type = STATE_TOGGLE[newState.num].color
    const lastType = STATE_TOGGLE[state.num].color

    const keyValue = COLOR_STATUS_VALUE[lastType]
    const color = keyValue['--background']

    document.documentElement.style.setProperty('--last-background', color)
    changeRootColors(type)
    playCoffeeMachineSound()
    return newState
  }
  return { num: state.num, show: false }
}
