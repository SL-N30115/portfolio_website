'use client'

import Link from 'next/link'
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri'

const icons = [
    {
        path: 'https://www.linkedin.com/in/steven-lai-b3baa018b/',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/SL-N30115',
        name: <RiGithubFill />
    }
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>{icons.map((icon, index) => {
            return <Link rel="noopener noreferrer" target="_blank" href={icon.path} key={index}>
                <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
        })}</div>
    )
}

export default Socials