import Testimony from "../cards/Testimony";
import SectionWrapper from "../wrappers/SectionWrapper";

const Testimonies = () => {
    const testimonies = [

        {
            person: "Emile",
            message: "Emile emile emile emile emile emile emile emile emile"
        },
        {
            person: "Emile",
            message: "Emile emile emile emile emile emile emile emile emile"
        },
        {
            person: "Emile",
            message: "Emile emile emile emile emile emile emile emile emile emile emile emile emile emilke"
        },
       
        
        

    ]
    return ( 
        <SectionWrapper>
             <div className="flex flex-col gap-3 mt-20 items-center">
                <h2 className="text-center text-[24px] font-bold">Customer experiences</h2>
                <p className="">What people say about us
                   </p>
            </div>
            <section className="mt-10 grid grid-cols-3 gap-10 px-28">
            {testimonies.map((test, index) => {
                return(
                    <Testimony key={index} index={index} name={test.person} testimony={test.message} />
                )

            })}
            </section>
            

        </SectionWrapper>
     );
}
 
export default Testimonies;