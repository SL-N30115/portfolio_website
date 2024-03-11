'use client'

import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import React, { useState } from "react"

const projectData = [
    {
        image: '/work/net_preview.png',
        category: 'C# .Net',
        name: 'Clinicpro_Backend',
        description: 'Restful API for clinicpro front-end that build with C#.net',
        link: 'https://clinicpro-111212.azurewebsites.net/swagger/index.html',
        github: 'https://github.com/SL-N30115/clinicpro_backend'
    },
    {
        image: '/work/oddles_preview.jpg',
        category: 'C# Unity',
        name: 'Oodles 720',
        description: 'Scalable interior design applications across multiple platforms using C# and JavaScript, ',
        link: 'https://720.oodles.com.hk/',
        github: '/'
    },
    {
        image: '/work/clinicpro_preview.png',
        category: 'React Native',
        name: 'Clinicpro',
        description: 'Patient Clinical Data Management Application',
        link: '/',
        github: 'https://github.com/SL-N30115/ClinicPro?tab=readme-ov-file'
    },
    {
        image: '/work/swifty_preview.png',
        category: 'Android',
        name: 'Swifty',
        description: 'service-matching application that demonstrates modern Android development',
        link: '/',
        github: 'https://github.com/SL-N30115/Swifty'
    },
];

const uniqueCategories = ['all projects', ... new Set(projectData.map(item => item.category))];

const Porjects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter((project) => {
        return category === 'all projects' ? project : project.category === category;
    })

    return (
        <section className='min-h-screen pt-12' >
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb:16 text-center mx-auto">My Projects</h2>
                {/* tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                                {category}
                            </TabsTrigger>
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            return <TabsContent value={category} key={index}>
                                <ProjectCard project={project} />
                            </TabsContent>
                        })}</div>
                </Tabs>
            </div>
        </section>
    )
}

export default Porjects