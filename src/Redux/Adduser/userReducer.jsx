import * as type from './userAction'
import { usersData } from './userData'

export const UserReducer = (state = usersData, action) => {
    switch(action.type){
        case type.ADD_USER:
            const userExisted = state.find(user => user.id == state.payload.id)
            if(!userExisted){
                return  [...state,action.payload]
            }else{
                alert('User already exist')
                return state
            }
        case type.DELETE_USER:
            return state.filter(user => user.id !== action.payload)
        case type.UPDATE_USER:
            const nom = action.payload.nom
            const prenom = action.payload.prenom
            const id = action.payload.id
            return state.map(user => user.id !== action.payload.id
                ? user : {id : id, nom : nom, prenom : prenom}
            )
        default :
        return state
    }
}