
export const initialeState = {
    stagiaires : [
        {
            image : "",
            nom : 'Ziad',
            prenom : "Riyad",
            filiere : 'TDI'
        }
    ]
}
export default function StagiaireReducer(state = initialeState, action) {
  switch(action.type){
    case 'ADD_STAGIAIRE':
        return {
            ...state,
            stagiaires : [...state.stagiaires, action.payload]
        }
    default :
        return state
  }
}
