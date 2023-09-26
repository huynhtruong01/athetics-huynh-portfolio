import { SocialData } from '@/models'
import { BsGithub } from 'react-icons/bs'
import { ImFacebook2, ImLinkedin } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'

export const socialList: SocialData[] = [
    {
        link: 'https://github.com/huynhtruong01',
        icon: BsGithub,
    },
    {
        link: 'https://www.facebook.com/roller.jon',
        icon: ImFacebook2,
    },
    {
        link: 'https://www.linkedin.com/in/huynh-truong-28309422a',
        icon: ImLinkedin,
    },
    {
        link: 'mailto:huynhphuoctruong01@gmail.com',
        icon: SiGmail,
    },
]
