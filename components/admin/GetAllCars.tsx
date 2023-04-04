import { useEffect, useState } from "react";
import { getCarsFunc } from "@/utils/functions";
import Footer from "../layout/Footer";
import Pagination from "./Pagination";
import {
    paginate
} from "@/utils/functions";
import { cars } from "@/dummyData/cars";
import Car from "../cards/Car";
import Filter from "../layout/Filter";
import Navbar from "../layout/Navbar";
import SectionWrapper from "../wrappers/SectionWrapper";
const GetAllCars = () => {


    // const [cars, setCars] = useState([])
    // useEffect(() => {
    //     const getCars = async () => {
    //         try {
    //             const res = await getCarsFunc("posts");
    //             setCars(res.data)

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getCars();
    // }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;
    const onPageChange = (page: any) => {
        setCurrentPage(page);
    };
    const paginatedPosts = paginate(cars, currentPage, pageSize);

    return (
        <>
        <Navbar />
        <SectionWrapper>
        <Filter />
        <section className="grid grid-cols-3 gap-x-20 gap-y-10 py-10 px-20">
            {paginatedPosts ? (
                paginatedPosts.map((car: any, index: number) => {
                    return (
                        <div key={index} className="">
                            <Car name={car.name} price={car.price} title={""} image={car.image} suv={car.suv} automatic={car.transmission} seats={car.seats} />
                            {/* <div>
                            {car.carImages.map((carImage : any, index: number) => {
                                return(
                                    <div key={index}>
                                        <img src={carImage.url} />
                                        </div>
                                )
                            })}
                        </div> */}
                        </div>
                    )
                })
            ) : ("")}
           
        </section>
         <Pagination
         items={cars.length} // 100
         currentPage={currentPage} // 1
         pageSize={pageSize} // 10
         onPageChange={onPageChange}
     />
     </SectionWrapper>

     <Footer />
     </>
    );
}

export default GetAllCars;