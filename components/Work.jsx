'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import ProjectCard from "./ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"


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

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <Link href='/projects'><Button>All Projects</Button></Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {projectData.slice(0, 4).map((project, index) => {
                            return <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work