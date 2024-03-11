import { MailIcon, HomeIcon } from "lucide-react"



const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                {/* title and image */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello👋
                        </div>
                        <h1 className="h1 max-w-md mb-8">Let's Connect!</h1>
                    </div>
                    <div className="hidden xl:flex w-full bg-contact_image_light dark:bg-contact_image_dark bg-contain bg-top bg-no-repeat"></div>
                </div>
                {/* info */}
                <div>
                    <div className="flex flex-col items-center gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>steven.lai1379@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>Hong Kong</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact