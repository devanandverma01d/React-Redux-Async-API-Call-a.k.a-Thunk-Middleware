import axios from "axios"
import { URL } from "../helper/helper"

export const getUserData = ()=>{
    return(dispatch)=>{
        //let's call API

        // let's simulate time here
        axios.get(URL+'/api/users?page=1')
            .then(function (response) {
              console.log(response.data.data)
              dispatch({type:"ADD_USER_DATA",payload:response.data.data})
            })
            .catch(function (error){
              console.log(error)
            })
            .finally(function (){
            })
            


        // setTimeout(()=>{
        //     dispatch({type:"GET_USER_DATA"})
        // },3000)
        
    }
}


