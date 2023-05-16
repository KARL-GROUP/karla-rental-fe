import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getOneCarsFunc } from "@/utils/functions";
import SectionWrapper from "../wrappers/SectionWrapper";
import Button from "../ui/Button";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import EditModal from "../modals/EditModal";
import OrderModal from "../modals/OrderModal";
const OneCar = () => {

    const router = useRouter()
    const query = router.query
    const id = query.id;
    const [car, setCar] = useState<any>()
    const [toEdit, setToEdit] = useState<any>()
    const [isEditing, setIsEditing] = useState(false)
    const [isOrdering, setIsOrdering] = useState(false)
    const [orderId, setOrderId] = useState()
    useEffect(() => {
        const getCar = async () => {
            try {
                const res = await getOneCarsFunc("cars/" + id);
                console.log("res", res)
                setCar(res.data.data)

            } catch (error) {
                console.log(error);
            }
        };
        getCar();
    }, []);

    const handleEdit = (selected: any) => {
        console.log("test", selected)
        setIsEditing(true)
        setToEdit(selected)
    }

    const handleBook = (id: any) => {
        setOrderId(id)
        setIsOrdering(true)
    }

    return (
        <>
            <Navbar />
            <SectionWrapper>
                <section className="pt-28 px-20">
                    {car ?
                        <div className="flex justify-between items-center">
                            <div className="w-1/2 flex flex-col gap-4 bg-[#D9D9D9] rounded-lg p-5">
                                <div className="w-full h-[40vh]">
                                    <img className="w-full h-full rounded-lg" src={car.coverImage.url} />
                                </div>
                                <div className="flex gap-5 w-full overflow-x-auto">
                                    {car.carImages.map((carImage: any, index: number) => {
                                        return (
                                            <img className="w-44 rounded-lg" key={index} src={carImage.url} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 w-2/5">
                                <div className="flex flex-col gap-3">
                                    <h1 className="font-bold text-2xl">{car.brand}</h1>
                                    <p className="text-[#242424]">{car.description}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2 items-center">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9 2.09581C19.65 1.35831 18.95 0.833313 18.125 0.833313H4.375C3.55 0.833313 2.8625 1.35831 2.6 2.09581L0 9.58331V19.5833C0 20.2708 0.5625 20.8333 1.25 20.8333H2.5C3.1875 20.8333 3.75 20.2708 3.75 19.5833V18.3333H18.75V19.5833C18.75 20.2708 19.3125 20.8333 20 20.8333H21.25C21.9375 20.8333 22.5 20.2708 22.5 19.5833V9.58331L19.9 2.09581ZM4.375 14.5833C3.3375 14.5833 2.5 13.7458 2.5 12.7083C2.5 11.6708 3.3375 10.8333 4.375 10.8333C5.4125 10.8333 6.25 11.6708 6.25 12.7083C6.25 13.7458 5.4125 14.5833 4.375 14.5833ZM18.125 14.5833C17.0875 14.5833 16.25 13.7458 16.25 12.7083C16.25 11.6708 17.0875 10.8333 18.125 10.8333C19.1625 10.8333 20 11.6708 20 12.7083C20 13.7458 19.1625 14.5833 18.125 14.5833ZM2.5 8.33331L4.375 2.70831H18.125L20 8.33331H2.5Z" fill="black" />
                                        </svg>
                                        <p>Type: <span className="text-[#242424] ml-1">{car.type}</span></p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p>Transmission: <span className="text-[#242424] ml-1">{car.transmission}</span></p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_118_689)">
                                                <path d="M20 14.0833C22.075 14.0833 23.7375 12.4083 23.7375 10.3333C23.7375 8.25831 22.075 6.58331 20 6.58331C17.925 6.58331 16.25 8.25831 16.25 10.3333C16.25 12.4083 17.925 14.0833 20 14.0833ZM10 14.0833C12.075 14.0833 13.7375 12.4083 13.7375 10.3333C13.7375 8.25831 12.075 6.58331 10 6.58331C7.925 6.58331 6.25 8.25831 6.25 10.3333C6.25 12.4083 7.925 14.0833 10 14.0833ZM10 16.5833C7.0875 16.5833 1.25 18.0458 1.25 20.9583V24.0833H18.75V20.9583C18.75 18.0458 12.9125 16.5833 10 16.5833ZM20 16.5833C19.6375 16.5833 19.225 16.6083 18.7875 16.6458C20.2375 17.6958 21.25 19.1083 21.25 20.9583V24.0833H28.75V20.9583C28.75 18.0458 22.9125 16.5833 20 16.5833Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_118_689">
                                                    <rect width="30" height="30" fill="white" transform="translate(0 0.333313)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Seats: <span className="text-[#242424] ml-1">{car.seats}</span></p>
                                    </div>
                                </div>
                                <Button text="Book online" className="bg-primary-blue text-white w-48" onClick={() =>handleBook(car.id)} />
                                <div className="flex gap-10">
                                    <div className="flex gap-2 items-center">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_122_580)">
                                                <path d="M8.275 13.4875C10.075 17.025 12.975 19.9125 16.5125 21.725L19.2625 18.975C19.6 18.6375 20.1 18.525 20.5375 18.675C21.9375 19.1375 23.45 19.3875 25 19.3875C25.6875 19.3875 26.25 19.95 26.25 20.6375V25C26.25 25.6875 25.6875 26.25 25 26.25C13.2625 26.25 3.75 16.7375 3.75 5C3.75 4.3125 4.3125 3.75 5 3.75H9.375C10.0625 3.75 10.625 4.3125 10.625 5C10.625 6.5625 10.875 8.0625 11.3375 9.4625C11.475 9.9 11.375 10.3875 11.025 10.7375L8.275 13.4875Z" fill="#00A5E7" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_122_580">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>+2507800000</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_122_585)">
                                                <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z" fill="#00A5E7" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_122_585">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>something@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ("")}
                    {isEditing && <EditModal toEdit={toEdit} />}
                    {isOrdering && <OrderModal id={orderId}/>}
                </section>
            </SectionWrapper>
            <Footer />
        </>
    );
}

export default OneCar;