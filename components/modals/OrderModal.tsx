import { orderFunc } from "@/utils/functions";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import getUserToken from "@/utils/getUserToken";

const OrderModal = ({id} : any) => {

    console.log("test", id)

    const [token, setToken] = useState("")
    useEffect(() => {
        return setToken(getUserToken());
      }, [])
    

    const [fullname, setFullname] = useState()

    const [phone, setPhone] = useState()
    const [customerId, setCustomerId] = useState()
    const [email, setEmail] = useState()
    const [description, setDescription] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()


    const onChangeFullname = (e: any) => {
        setFullname(e.target.value)
    }
    const onChangePhone = (e : any) => {
        setPhone(e.target.value)
    }

    const onChangeCustomerId = (e:any) => {
        setCustomerId(e.target.value)
    }
    const onChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const onChangeDescription = (e : any) => {
        setDescription(e.target.value)
    }

    const onChangeStartDate=(e: any) => {
        setStartDate(e.target.value)
    }

    const onChangeEndDate = (e: any) => {
        setEndDate(e.target.value)
    }

    const order = async (data: any) => {
        const res = await orderFunc("orders", data, {
            authorization: "Bearer " + token,
            
        });
     
      };

    
      const sendOrder = async (e: any) => {
        e.preventDefault();
        const orderData = {
            car: id,
            fullName: fullname,
            phone: phone,
            customerId: {
                type: "national",
                value: customerId
            },
            email: email,
            description: description,
            startDate: startDate,
            endDate: endDate
     
        };
        try {
          await order(orderData);
        } catch (error) {
        //   setErr(error?.response?.data?.errors || error.message);
        }
      };


    return ( 
        <section>
            <form>
                <input placeholder="Fullname" type="text" name="fullName" onChange={onChangeFullname}/>
                <input placeholder="phone" type="text" name="phone" onChange={onChangePhone}/>
                <input placeholder="passport/id" type="text" name="customerId" onChange={onChangeCustomerId}/>
                <input placeholder="email" type="text" name="email" onChange={onChangeEmail}/>
                <input placeholder="description" type="text" name="description" onChange={onChangeDescription}/>
                <input placeholder="start date" type="text" name="startDate" onChange={onChangeStartDate}/>
                <input placeholder="end date" type="text" name="endDate" onChange={onChangeEndDate}/>
                <Button text="Book now" onClick={sendOrder}/>
            </form>
        </section>
     );
}
 
export default OrderModal;