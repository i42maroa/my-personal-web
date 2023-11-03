import ExperienceComponent from './components/home/experience/component'
import PresentationComponent from './components/home/presentation/component'
import ContactComponent from './components/home/contact/component'
import DescriptionComponent from './components/home/description/component'
import ThecnologiesComponent from './components/home/thecnologies/component'
import ProjectsComponent from './components/home/projects/component'

export default function Home () {
  return (
    <><PresentationComponent /><DescriptionComponent /><ExperienceComponent /><ThecnologiesComponent /><ProjectsComponent /><ContactComponent /></>
  )
}
