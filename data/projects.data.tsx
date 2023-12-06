import { ProjectInterface } from '@/app/interface/project.interface'
import { COUNTRY_MANAGEMENT_BACK_PROJECT } from './projects/country_management_project.data'
import { SHREILAK_PROJECT } from './projects/shreilak_project.data'
import { NUTRICION_PROJECT } from './projects/nutricion_management_project.data'
import { ENGLISH_TRAINNING_PROJECT } from './projects/english_training_project.data'

export const PROJECTS_DATA: ProjectInterface[] = [
  SHREILAK_PROJECT,
  NUTRICION_PROJECT,
  ENGLISH_TRAINNING_PROJECT,
  COUNTRY_MANAGEMENT_BACK_PROJECT
]
