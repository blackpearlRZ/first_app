import { usersData } from "../Adduser/userData";

const initialState = {
    users : usersData 
}
//State = {type : 'ADD_USER', payload : user}
export default function userReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_USER' : 
            return {
                ...state,
                users : [...state.users , action.payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                users : state.users.filter(user  => user.id !== action.payload)
            }
        case "UPDATE_USER":
            return{
                ...state,
                users : state.users.map(user => {
                   if(user.id == action.payload.id){
                    return {
                        ...user,
                        nom : action.payload.nom
                    }
                   }
                   else{
                        return user
                   }
                })
            }
        default :
            return state
    }
}