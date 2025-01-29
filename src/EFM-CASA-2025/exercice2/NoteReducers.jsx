
export const initialState = {
    notes : [
        { nom: "Cours à préparer", detail: "Cours création API REST via ExpressJS", date: "23/01/2025" },
        { nom: "Courses", detail: "Faire les courses pour le week-end prochain", date: "26/01/2025" },
        { nom: "Réunion", detail: "Réunion avec l'équipe de projet", date: "28/01/2025" },
        { nom: "Sport", detail: "Entraînement de football", date: "29/01/2025" },
        { nom: "Anniversaire", detail: "Anniversaire de Marie", date: "30/01/2025" }
      ]
    }

export default function NoteReducers(state = initialState, action) {
  switch(action.type){
    case 'ADD_NOTE' : 
    return {
        ...state,
        notes : [...state.notes , action.payload]
    }
    default : 
        return state
  }
}
