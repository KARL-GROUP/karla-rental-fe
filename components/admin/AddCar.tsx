import { addCarFunc, editCarFunc } from '@/utils/functions';
import { FormEvent, useState, useEffect } from 'react';
import Select from 'react-select'
import getUserToken from '@/utils/getUserToken';
import carCover from '@/utils/carCover';

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

const AddCar = ({toEdit} : any) => {
  const [chooseCoverImage, setChooseCoverImage] = useState(false)
  const [allCarImages, setAllCarImages] = useState<any>()
  const [carDetails, setCarDetails] = useState<any>()
  const [token, setToken] = useState("")
  const [id, setId] = useState()

  useEffect(() => {
    return setToken(getUserToken());
  }, [])

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [formValues, setFormValues] = useState<CarFormValues>(initialFormValues);
  const [carImages, setCarImages] = useState<FileList | null>(null);



  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('brand', formValues.brand);
    formData.append('model', formValues.model);
    formData.append('year', formValues.year);
    formData.append('description', formValues.description);
    formData.append('type', formValues.type);
    formData.append('transmission', formValues.transmission);
    formData.append('price', formValues.price);
    formData.append('seats', formValues.seats);
    // Convert the category array to a JSON string and append it to the form data
    // formData.append('category', JSON.stringify(formValues.category));
    if (carImages) {
      for (let i = 0; i < carImages.length; i++) {
        formData.append('carImages', carImages[i]);
      }
    }

    const response = await addCarFunc('cars', formData, {
      authorization: "Bearer " + token,
    })
      .then((res) => {
        console.log("Response", res);
        setCarDetails(res)
        setChooseCoverImage(true)
        setId(res.data.data.car.id)
        setAllCarImages(res.data.data.car.carImages)
        console.log("details", carDetails)
      }).catch((error) => {
        console.log("error", error)
        // toast.error(error.response?.data?.message)
      })


  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });

  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setCarImages(files);
  };


  const handleSetCoverCarImage = async (index: number, url: any, public_id: any) => {
    const res = await editCarFunc(`cars/${id}`, {
      coverImage
        : {url,public_id}
    }, {
      authorization: "Bearer " + token,
    })

  }

 
  const [show, setShow] = useState(true)
  return (
    <>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/5 ">



        <input placeholder='Car Name' type="text" name="brand" value={formValues.brand} onChange={handleInputChange} />
        <textarea placeholder='Description' rows={5} name="description" value={formValues.description} onChange={handleInputChange} />

        <div className='flex justify-between gap-4 w-full'>
          <input className='w-1/2' placeholder='Plate' type="text" name="model" value={formValues.model} onChange={handleInputChange} />
          <input className='w-1/2' placeholder='Transmission' type="text" name="transmission" value={formValues.transmission} onChange={handleInputChange} />
        </div>
        <div className='flex justify-between gap-4'>
          <input className='w-1/2' placeholder='Price' type="text" name="price" value={formValues.price} onChange={handleInputChange} />
          <input className='w-1/2' placeholder='Number of seats' type="number" name="seats" value={formValues.seats} onChange={handleInputChange} />
        </div>  {/* {allCarImages ? allCarImages.map((carImage: any, index: number) => {
          return(    {carDetails ? carDetails.map((car: any, index: number)=> {
          console.log("cars", car)
          return(
            <div>
              </div>

          )
        }) : ("")}
<img key={index} src={carImage.url} onClick={() => handleSetCoverCarImage(index, carImage.url)} />
          )
        }): ("")}  */}
        <div className='flex justify-between gap-4'>
          <input className='w-1/2' placeholder='year' type="number" name="year" value={formValues.year} onChange={handleInputChange} />
          <input className='w-1/2' placeholder='type' type="text" name="type" value={formValues.type} onChange={handleInputChange} />
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
        <button type="submit" >Add new car</button>
      </form>

      {chooseCoverImage && <div>
        <h1 className='text-6xl'>Working</h1>\

        {/* {carDetails} */}
        {allCarImages ? allCarImages.map((carImage: any, index: number) => {
          return (
            <img key={index} src={carImage.url} onClick={() => handleSetCoverCarImage(index, carImage.url, carImage.public_id)} />
          )
        }) : ("")}


      </div>}
    </>
  );
}

export default AddCar;