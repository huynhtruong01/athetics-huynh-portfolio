import { FaNodeJs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import {
    SiMongodb,
    SiMui,
    SiMysql,
    SiNestjs,
    SiTailwindcss,
    SiTypescript,
    SiMarkdown,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { ProjectData } from '../models'

export const projectList: ProjectData[] = [
    {
        img: 'https://res.cloudinary.com/huynhtruong01/image/upload/v1693889083/Screenshot_2023-09-05_114029_dorkqp.png',
        title: 'Github Me',
        languageList: [
            {
                name: 'ReactJS',
                icon: GrReactjs,
            },
            {
                name: 'Typescript',
                icon: SiTypescript,
            },
            {
                name: 'MUI',
                icon: SiMui,
            },
            {
                name: 'React Markdown',
                icon: SiMarkdown,
            },
        ],
        detail: 'A website that helps Github user customize their Readme easier by copy-pasting codes from website to embedd badges, stats, download file README, ...',
        link: 'https://github.com/huynhtruong01/github-me',
    },
    {
        img: 'https://bizweb.dktcdn.net/100/438/408/themes/919724/assets/banner-new-bst-desktop.png?1693888109548',
        title: 'YODY Store Clone',
        languageList: [
            {
                name: 'NextJS',
                icon: TbBrandNextjs,
            },
            {
                name: 'TailwindCSS',
                icon: SiTailwindcss,
            },
            {
                name: 'NestJS',
                icon: SiNestjs,
            },
            {
                name: 'Typescript',
                icon: SiTypescript,
            },
            {
                name: 'MongoDB',
                icon: SiMongodb,
            },
        ],
        detail: 'Our vast selection of products spans across various categories, from electronics and fashion to home essentials and beyond. Discover the latest trends, trusted brands, and exclusive deals, all in one place.',
        link: 'https://github.com/huynhtruong01/yody-app',
    },
    {
        img: 'https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png',
        title: 'News IT App',
        languageList: [
            {
                name: 'ReactJS',
                icon: TbBrandNextjs,
            },
            {
                name: 'Typescript',
                icon: SiTypescript,
            },
            {
                name: 'MUI',
                icon: SiMui,
            },
            {
                name: 'NodeJS',
                icon: FaNodeJs,
            },
            {
                name: 'MySQL',
                icon: SiMysql,
            },
        ],
        detail: "News IT is a vibrant and inclusive community created by and for developers. It's your go-to platform for everything related to software development, programming, and technology. Whether you're a seasoned pro or just starting your coding journey, Dev.to is the place to connect, learn, and share with like-minded individuals.",
        link: 'https://github.com/huynhtruong01/yody-app',
    },
]
