import axios from "axios";

export const loginUser = async (data)=>{
    try{
        const response = await axios.post(
            "http://localhost:7000/api/v1/users/login",
            data
        );
        return response.data;
        }
        catch(error){
            console.log(error);
            return error;
        }
    }

export const registerUser=async(data)=>{
    try{
        const response=await axios.post("http://localhost:7000/api/v1/users/register",data)
        return response.data
    }catch(error){
        console.log(error)
        return error

    }
}

export const chat=async(data)=>{
    try{
        const response=axios.post("http://localhost:7000/api/v1/chats/send",data)
        return response.data

    }catch(error){
console.log(error)
return error
    }
}