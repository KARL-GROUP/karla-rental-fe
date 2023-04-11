import { useState } from "react";

const OrderModal = () => {

    const [fullname, setFullname] = useState()
    const [phone, setPhone] = useState()
    const [customerId, setCustomerId] = useState()
    const [email, setEmail] = useState()
    const [description, setDescription] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    return ( 
        <section>
            <form>
                <input placeholder="Fullname" type="text" name="fullName"/>
                <input placeholder="phone" type="text" name="phone"/>
                <input placeholder="passport/id" type="text" name="customerId"/>
                <input placeholder="email" type="text"/>
                <input placeholder="description" type="text"/>
                <input placeholder="start date" type="text"/>
                <input placeholder="end date" type="text"/>
            </form>
        </section>
     );
}
 
export default OrderModal;