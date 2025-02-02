
const initialeState  = {}

export default function likeReducer(state = initialeState, action){
    switch(action.type){
        case 'ADD_LIKE': 
            return {
                ...state,
                [action.payload]: (state[action.payload] || 0) + 1,
            }
        default : 
            return state
    }
}