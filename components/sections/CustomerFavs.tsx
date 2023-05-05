import SectionWrapper from "../wrappers/SectionWrapper";
import herocar from '../../public/assets/hercar.png'
import Car from "../cards/Car";
import Button from "../ui/Button";

const CustomerFavs = () => {

    const custFav = [
        {
            name: "Toyota 4Runner 2016",
            price: "25$",
            title:"Category category category" ,
            image: "/assets/car.png",
            suv: "suv",
            automatic: "automatic",
            seats: "4 seats"
         },
         {
            name: "Toyota 4Runner 2016",
            price: "25$",
            title:"Category category category" ,
            image: "/assets/car.png",
            suv: "suv",
            automatic: "automatic",
            seats: "4 seats"
         },
         {
            name: "Toyota 4Runner 2016",
            price: "25$",
            title:"Category category category" ,
            image: "/assets/car.png",
            suv: "suv",
            automatic: "automatic",
            seats: "4 seats"
         },
           
    ]
    return (

        <SectionWrapper>
            <h3 className="font-bold text-[24px] text-center mt-16">Customer favorites</h3>
            <p className="text-primary-text text-[18px] text-center mt-5">A few picks from previous customers’ liking</p>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-10 lg:px-16">
                {custFav.map((fav, index) => {
                    return(
                        <Car name={fav.name} price={fav.price} title={fav.title} image={fav.image} suv={fav.suv} automatic={fav.automatic} seats={fav.seats} />
                    )
                })}

            </section>
            <div className="flex justify-center mt-10">
                <Button text="Explore all cars" className="bg-[#F5F5F5] border-2 border-primary-blue text-primary-blue font-bold py-2"/>
            </div>
        </SectionWrapper>
    );
}

export default CustomerFavs;