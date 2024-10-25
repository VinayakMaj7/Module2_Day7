import { useForm } from "react-hook-form"
import axios from 'axios'

export default function CreatePage(){
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async(data) => {
    try{
      const response = await axios.post('http://localhost:3000/api/products', data)
      alert("Product is created successfully", response.data)
      reset()
    } catch (error){
      console.log("Error in creating product", error);
    }
  }
return (
  <form onSubmit = {handleSubmit(onSubmit)}>
    <h2> Product form</h2>
    <label> Enter Product Name</label>
    <input {...register("p_name")}/>
    <br/>
    <label> Enter Product </label>
    <input {...register("price")}/>
    <br/>
    <label> Enter Product Description</label>
    <textarea {...register("description")} />
    <br/>
    <input type = "submit"/>
  </form>
)
}