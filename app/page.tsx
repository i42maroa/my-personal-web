'use client'
import ExperienceComponent from './components/home/experience/component'
import PresentationComponent from './components/home/presentation/component'
import ContactComponent from './components/home/contact/component'
import DescriptionComponent from './components/home/description/component'
import ThecnologiesComponent from './components/home/thecnologies/component'
import ProjectsComponent from './components/home/projects/component'
import { Delimiter } from './components/shared/delimiter/Delimiter'
import { useEffect } from 'react'
import { STATE_TOGGLE } from '@/data/state-toggle.data'
import changeRootColors from '@/hook/changeColor'
import { useStateDispatch } from './StatusContextProvider'

export default function Home () {
  const dispatchNewStateContext = useStateDispatch()
  useEffect(() => { changeRootColors(STATE_TOGGLE[0].color); dispatchNewStateContext({ num: 0, show: true }) })
  return (
    <>
      <PresentationComponent />
      <Delimiter />
      <DescriptionComponent />
      <Delimiter />
      <ExperienceComponent />
      <Delimiter />
      <ThecnologiesComponent />
      <Delimiter />
      <ProjectsComponent />
      <Delimiter />
      <ContactComponent />
      <Delimiter />
    </>
  )
}
