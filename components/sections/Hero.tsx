import Button from "../ui/Button";
import SectionWrapper from "../wrappers/SectionWrapper";
import map from '../../public/assets/map.png'
import herimage from '../../public/assets/carhero.png'
import Image from "next/image";
const Hero = () => {
    return (
        // <SectionWrapper>
        <section className="pt-44 lg:pl-24 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 px-10 flex flex-col gap-5">
                <h1 className="text-5xl leading-[50px] lg:text-6xl font-bold text-primary-blue lg:leading-[70px]">Premium <span className="text-black">Car Rental
                    in Rwanda</span> </h1>
                <p className="text-primary-text text-lg lg:w-1/2 tracking-[0.8px]">Drive in comfort and luxury with
                    the best premium cars in Rwanda.</p>
                <Button text="Browse cars" className="mt-5 w-4/5 lg:w-1/3 text-white bg-primary-blue" />
            </div>
            <div className=" flex justify-end h-[40vh] md:h-auto relative md:w-2/5 mt-10 lg:mt-0">
                <Image src={herimage} alt="car" layout="fill" className="absolute" />
            </div>

        </section>
        // </SectionWrapper>
    );
}

export default Hero;