import axios from "axios";

export const getRecords = () => {
   return axios.get("https://fakestoreapi.com/products")
   .then(res=>{return res.data})
   .catch(error=> console.log(error))
};