import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';

const initialState = [
    
                        {
                            "id": 1,
                            "email": "george.bluth@reqres.in",
                            "first_name": "George",
                            "last_name": "Bluth",
                            "avatar": "https://reqres.in/img/faces/1-image.jpg"
                        },
                        {
                            "id": 2,
                            "email": "janet.weaver@reqres.in",
                            "first_name": "Janet",
                            "last_name": "Weaver",
                            "avatar": "https://reqres.in/img/faces/2-image.jpg"
                        }
                        
                    
                    ]

const rootReducer = (oldState,action)=>{
    let newState = oldState;
    switch(action.type){
        case "GET_USER_DATA":
            return [
                ...newState,
                {
                    "id": 3,
                    "email": "emma.wong@reqres.in",
                    "first_name": "Emma",
                    "last_name": "Wong",
                    "avatar": "https://reqres.in/img/faces/3-image.jpg"
                }
            ]
        case "ADD_USER_DATA":
            return [
                ...newState,
                ...action.payload
                
            ]
        default:  
        return newState;  
    }
    
}

export const store = createStore(rootReducer,initialState,applyMiddleware(thunk))