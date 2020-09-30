import { ADD_NOTE, DELETE_NOTE } from "./types";

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    data: note,
  };
};
