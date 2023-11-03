import { ProjectInterface } from '@/app/interface/project.interface'
import { ENGLISH_TRAINNING_PROJECT } from './projects/english_training_project.data'
import { COUNTRY_MANAGEMENT_APP_PROJECT, COUNTRY_MANAGEMENT_BACK_PROJECT } from './projects/country_management_project.data'

export const PROJECTS_DATA: ProjectInterface[] = [
  ENGLISH_TRAINNING_PROJECT,
  COUNTRY_MANAGEMENT_BACK_PROJECT,
  COUNTRY_MANAGEMENT_APP_PROJECT
]
