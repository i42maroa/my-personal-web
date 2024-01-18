'use client'

import { CONTEXT_STATE } from '@/hook/changeContext'
import React, { useContext, useState } from 'react'

export const StatusColorContext = React.createContext({ state: { num: 0, show: false }, dispatch: (state:CONTEXT_STATE) => {} })

export function useStateContext () {
  return useContext(StatusColorContext)
}

export function StatusContextProvider ({ children }: {
    children: React.ReactNode
  }) {
  const [context, setContext] = useState({ num: 0, show: false })

  return (
    <StatusColorContext.Provider value={{ state: context, dispatch: setContext }}>
      {children}
    </StatusColorContext.Provider>
  )
}
