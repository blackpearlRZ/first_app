import * as type from './userAction'

export const AddUser = (user) => {
    return{
        type : type.ADD_USER,
        payload : user
    }
}
export const DeleteUser = (id) => {
    return {
        type : type.DELETE_USER,
        payload : id
    }
}
export const UpdateUser = (id , user) => {
    return{
        type : type.UPDATE_USER,
        payload : id , user
    }
}