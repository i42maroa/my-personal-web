'use client'

import { STATE_TOGGLE } from '@/data/state-toggle.data'
import changeRootColors from '@/hook/changeColor'
import React, { createContext, useContext, useReducer } from 'react'

export const StatusColorContext = createContext(0)

export const StatusColorDispatchContext = createContext((value:number) => {})

export function useStateContext () {
  return useContext(StatusColorContext)
}

export function useStateDispatch () {
  return useContext(StatusColorDispatchContext)
}

function reducer (state: number, newState:number) {
  const type = STATE_TOGGLE[newState].color
  changeRootColors(type)
  return newState
}

export function StatusContextProvider ({ children }: {
    children: React.ReactNode
  }) {
  const [status, dispatch] = useReducer(reducer, 0)
  return (
    <StatusColorContext.Provider value={status}>
      <StatusColorDispatchContext.Provider value={dispatch}>
        {children}
      </StatusColorDispatchContext.Provider>
    </StatusColorContext.Provider>
  )
}
