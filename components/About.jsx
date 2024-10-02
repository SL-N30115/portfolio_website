import Image from "next/image"
import DevImg from "./DevImg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, User2 } from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Steven Lai'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'steven.lai1379@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 16 Sept, 1993'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Creative Media'
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Centennial College',
                qualification: 'Postgraduate Certificate on Mobile Application Development',
                years: '2022-2023',
            },
            {
                university: 'City University of Hong Kong',
                qualification: 'Bachelor of Creative Media',
                years: '2016-2018',
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'I-Charge Solutions International LTD',
                title: 'Senior Software Developer',
                years: '2024/07-present',
            },
            {
                company: 'Success Base Engineering LTD',
                title: 'Software Developer',
                years: '2020-2022',
            },
            {
                company: '3 Eyes Limited',
                title: 'Software Engineer',
                years: '2019-2020',
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Front-end Development',
                tech: 'HTML, CSS, JavaScript, Vue, Vuetify, React.js, Tailwind CSS'
            },
            {
                name: 'Back-end Development',
                tech: 'Node.js, Express.js, C# .NET Framework'
            },
            {
                name: 'Cross Platform Development',
                tech: 'Unity, Kotlin, React Native, Android, Linux'
            },
            {
                name: 'Cloud',
                tech: 'Azure, AWS'
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/cscode.svg',
            },

        ]
    },
];

const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                        w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/laptop.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">full-stack software engineer with 4 years of experience</h3>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English, Cantonese, Mandarin</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Joruney</h3>
                                        {/* experience & education wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const { company, title, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                                                </div>
                                                                <div >
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{title}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={26} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                                                </div>
                                                                <div >
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">Tools I Use</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { name, tech } = item;
                                                    return <div className="w-2/3 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium text-primary">{name}</div>
                                                        <div className="text-muted-foreground">{tech}</div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About