import Button from "../ui/Button";
import SectionWrapper from "../wrappers/SectionWrapper";
import map from '../../public/assets/map.png'
import herimage from '../../public/assets/carhero.png'
import Image from "next/image";
const Hero = () => {
    return (
        // <SectionWrapper>
            <section className="pt-44 pl-24 flex justify-between">
                <div className="w-1/2 px-10 flex flex-col gap-5">
                    <h1 className="text-6xl font-bold text-primary-blue leading-[70px]">Premium <span className="text-black">Car Rental
                        in Rwanda</span> </h1>
                    <p className="text-primary-text text-lg w-1/2 tracking-[0.8px]">Drive in comfort and luxury with
                        the best premium cars in Rwanda.</p>
                    <Button text="Browse cars" className="mt-5 w-1/3 text-white" />
                </div>
                <div className=" relative w-2/5">
<Image src={herimage} alt="car" layout="fill" className="absolute"/>
                </div>

            </section>
        // </SectionWrapper>
    );
}

export default Hero;