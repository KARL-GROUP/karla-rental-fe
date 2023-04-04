const getUserToken = (): string => {

    return `${localStorage.getItem("access-token")}`;
  
  }
  
  export default getUserToken