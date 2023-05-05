import SectionWrapper from "../wrappers/SectionWrapper";
import Service from "../cards/Service";
const Services = () => {

    const services = [
        {
            icon: <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" width="30" height="30" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_51_742" transform="scale(0.0104167)" />
                    </pattern>
                    <image id="image0_51_742" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg>,
            title: "Chauffeur",
            description: "Full time personal driver provided on request during the rental period"

        },
        {
            icon: <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" width="30" height="30" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_51_742" transform="scale(0.0104167)" />
                    </pattern>
                    <image id="image0_51_742" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg>,
            title: "Chauffeur",
            description: "Full time personal driver provided on request during the rental period"

        },
        
        {
            icon: <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" width="30" height="30" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_51_742" transform="scale(0.0104167)" />
                    </pattern>
                    <image id="image0_51_742" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg>,
            title: "Chauffeur",
            description: "Full time personal driver provided on request during the rental period"

        },
        
    ]
    return (
        <section className="services w-full h-[300px] mt-28 mb-44 relative">
            <div className="bg-black/10 absolute top-0 left-0 h-full w-full">

            </div>
            <SectionWrapper>
                <section className="relative flex flex-col py-16 gap-5">
                <h3 className="text-white font-bold text-2xl text-center">Our services</h3>
                <p className="text-primary-gray text-[18px] text-center">Additional related services offered</p>
                <div className="absolute  px-10">
                <div className="grid grid-cols-3 gap-40 relative top-36">
                    {services.map((service, index) => {
                        return (
                            <Service key={index} icon={service.icon} title={service.title} description={service.description} />
                        )
                    })}

                </div>
                </div>
                </section>
            </SectionWrapper>

        </section>
    );
}

export default Services;