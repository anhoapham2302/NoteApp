import { ADD_NOTE, DELETE_NOTE } from "./types";

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    data: note,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    id: id,
  };
}
