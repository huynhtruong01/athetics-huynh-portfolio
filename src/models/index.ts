import { IconType } from 'react-icons'

export interface SocialData {
    link: string
    icon: IconType
}

export interface LanguageProjectData {
    name: string
    icon: IconType
}

export interface ProjectData {
    img: string
    title: string
    languageList: LanguageProjectData[]
    detail: string
    link: string
}

export interface NavFooterData {
    name: string
    link: string
}
