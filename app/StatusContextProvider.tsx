'use client'

import { COLOR_STATUS_VALUE } from '@/data/color.data'
import { STATE_TOGGLE } from '@/data/state-toggle.data'
import changeRootColors from '@/hook/changeColor'
import { playCoffeeMachineSound } from '@/hook/playCoffeeMachineSound'
import React, { createContext, useContext, useReducer } from 'react'

export interface CONTEXT_STATE {num:number, show:boolean};
export const StatusColorContext = createContext({ num: 0, show: false })
export const StatusColorDispatchContext = createContext((state: CONTEXT_STATE) => { })

export function useStateContext () {
  return useContext(StatusColorContext)
}

export function useStateDispatch () {
  return useContext(StatusColorDispatchContext)
}

function reducer (state:CONTEXT_STATE, newState: CONTEXT_STATE) {
  if (state.num !== newState.num) {
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

export function StatusContextProvider ({ children }: {
    children: React.ReactNode
  }) {
  const [status, dispatch] = useReducer(reducer, { num: 0, show: false })

  return (
    <StatusColorContext.Provider value={status}>
      <StatusColorDispatchContext.Provider value={dispatch}>
        {children}
      </StatusColorDispatchContext.Provider>
    </StatusColorContext.Provider>
  )
}
