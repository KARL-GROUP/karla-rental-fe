import Select from 'react-select'

const Filter = () => {


const carType = [
  { value: 'chocolate', label: 'ChocolateChocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const carBrand = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const brandModel = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const modelYear = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
    return ( 
        <section className='flex items-center gap-10 pt-32 px-10'>

            <div className='flex gap-10'>
            <Select options={carType} placeholder="Car type"/>
             <Select options={carBrand} placeholder="Car brand"/>
             <Select options={brandModel} placeholder="Brand model"/>
             <Select options={modelYear} placeholder="Model year"/>
            </div>

            <div className='flex items-center gap-3'>
                Price range:
                <input placeholder='0.0' className='border px-5 py-3 w-16'/>
                --
                <input placeholder='0.0' className='border px-5 py-3 w-16'/>
            </div>

            <button className='bg-primary-blue flex items-center gap-2 px-4 py-2 rounded text-white'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 22.5V20H17.5V22.5H12.5ZM7.5 16.25V13.75H22.5V16.25H7.5ZM3.75 10V7.5H26.25V10H3.75Z" fill="white"/>
</svg>
Filter
</button>
         

        </section>
     );
}
 
export default Filter;