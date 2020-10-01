import { ADD_NOTE, DELETE_NOTE } from "../actions/types";

const intialState = {
  noteList: [],
};

export const noteReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
        {
            const newList = [...state.noteList];
            newList.unshift(action.data);
            return { ...state, noteList: newList };
        }
    case DELETE_NOTE:
        {
          const newList = [...state.noteList];
          const filterList = newList.filter(note => note.id !== action.id);
          return {...state, noteList: filterList};
        }
    default:
      return state;
  }
};
