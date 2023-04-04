import { editCarFunc } from "@/utils/functions";
import { useState, useEffect } from "react";
import getUserToken from "@/utils/getUserToken";

interface CarFormValues {
    brand: string;
    model: string;
    year: string;
    description: string;
    type: string;
    transmission: string;
    price: string;
    seats: string;
}

const initialFormValues: CarFormValues = {
    brand: '',
    model: '',
    year: '',
    description: '',
    type: '',
    transmission: '',
    price: '',
    seats: '',
};


const EditModal = ({toEdit} : any) => {


    const [token, setToken] = useState("")
    console.log("to edit", toEdit)
    useEffect(() => {
        return setToken(getUserToken());
      }, [])
    

    const [formValues, setFormValues] = useState<CarFormValues>(initialFormValues);
    const [carImages, setCarImages] = useState<FileList | null>(null);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });

    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = event.target;
        setCarImages(files);
    };


    const handleSubmit = async() => {
        const response = await editCarFunc(`cars/${toEdit.id}`, {
            
        }, {
            authorization: "Bearer " + token,
          })
    }
    return (
        <section className="bg-black px-20 py-10">
            <div className="bg-white">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/5 ">
                    <input placeholder='Car Name' type="text" name="brand" value={toEdit.brand} onChange={handleInputChange} />
                    <textarea placeholder='Description' rows={5} name="description" value={toEdit.description} onChange={handleInputChange} />

                    <div className='flex justify-between gap-4 w-full'>
                        <input className='w-1/2' placeholder='Plate' type="text" name="model" value={toEdit.model} onChange={handleInputChange} />
                        <input className='w-1/2' placeholder='Transmission' type="text" name="transmission" value={toEdit.transmission} onChange={handleInputChange} />
                    </div>
                    <div className='flex justify-between gap-4'>
                        <input className='w-1/2' placeholder='Price' type="text" name="price" value={toEdit.price} onChange={handleInputChange} />
                        <input className='w-1/2' placeholder='Number of seats' type="number" name="seats" value={toEdit.seats} onChange={handleInputChange} />
                    </div>
                    <div className='flex justify-between gap-4'>
                        <input className='w-1/2' placeholder='year' type="number" name="year" value={toEdit.year} onChange={handleInputChange} />
                        <input className='w-1/2' placeholder='type' type="text" name="type" value={toEdit.type} onChange={handleInputChange} />
                    </div>
                    <input className='border  {/* {allCarImages ? allCarImages.map((carImage: any, index: number) => {
  return(    {carDetails ? carDetails.map((car: any, index: number)=> {
  console.log("cars", car)
  return(
    <div>
      </div>

  )
}) : ("")}
<img key={index} src={carImage.url} onClick={() => handleSetCoverCarImage(index, carImage.url)} />
  )
}): ("")}  */} bg-white border-gray-300 py-3 px-5 outline-none rounded' placeholder='Seelct images' type="file" name="carImages" onChange={handleFileInputChange} multiple />
                    <button type="submit" >Edit</button>
                </form>
            </div>

        </section>
    );
}

export default EditModal;