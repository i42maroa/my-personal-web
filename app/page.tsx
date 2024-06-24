'use client'
import ExperienceComponent from './components/home/experience/component'
import PresentationComponent from './components/home/presentation/component'
import ContactComponent from './components/home/contact/component'
import DescriptionComponent from './components/home/description/component'
import ThecnologiesComponent from './components/home/thecnologies/component'
import ProjectsComponent from './components/home/projects/component'
import { Delimiter } from './components/shared/delimiter/Delimiter'
import { useContext, useEffect } from 'react'
import { STATE_TOGGLE } from '@/data/state-toggle.data'
import changeRootColors from '@/hook/changeColor'
import { StatusColorContext } from './StatusContextProvider'

export default function Home () {
  const context = useContext(StatusColorContext)
  useEffect(() => { changeRootColors(STATE_TOGGLE[context.state.num].color) })
  return (
    <>
      <PresentationComponent />
      <Delimiter />
      <DescriptionComponent />
      <Delimiter />
      <ExperienceComponent />
      <Delimiter />
      <ProjectsComponent />
      <Delimiter />
      <ThecnologiesComponent />
      <Delimiter />
      <ContactComponent />
      <Delimiter />
    </>
  )
}
