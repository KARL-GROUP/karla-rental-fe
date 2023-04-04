import axios from "axios";

export const paginate = (items: any, pageNumber: any, pageSize: any) => {
  console.log("items", items)
    const startIndex = (pageNumber - 1) * pageSize;
    // return items.slice(startIndex, startIndex + pageSize);
    return items
   };


export async function adminRegisterFunc(endpoint : string, body :any)  {
    let response = await axios.post(`https://karla-rental-be-development.up.railway.app/api/${endpoint}`, body);
    return response;
  
  }

export async function adminLoginFunc(endpoint : string, body :any)  {
    let response = await axios.post(`https://karla-rental-be-development.up.railway.app/api/${endpoint}`, body);
    return response;
  
  }

  export async function addCarFunc(
    endpoint: string,
    body: any,
    headers : any
  ) {
    let response = await axios.post(
      `https://karla-rental-be-development.up.railway.app/api/${endpoint}`, body, {
        headers,
      }
    );
    return response;
  }
  
  
export async function getCarsFunc(endpoint : string)  {
    let response = await axios.get(`https://karla-rental-be-development.up.railway.app/api/${endpoint}`);
    return response;
  
  }


  export async function editCarFunc(
    endpoint: string,
    body: any,
    headers : any
  ) {
    let response = await axios.put(
      `https://karla-rental-be-development.up.railway.app/api/${endpoint}`, body, {
        headers,
      }
    );
    return response;
  }

  