import { useState } from "react";

let initial_state = {
  NoteList: [],
};

const AddReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "AddNote":
      const { id, store_content } = action.payload;
      return {
        ...state,
        NoteList: [...state.NoteList, { id: id, store_content: store_content }],
      };

    case "DeleteNote":
      const newList = state.NoteList.filter((value) => {
        return value.id !== action.id;
      });
      return {
        ...state,
        NoteList: newList,
      };
    case "Edit":
      const editList = state.NoteList.map((cnote) => {
        if (cnote.id === action.props.id) {
          return {
            id: action.props.id,
            store_content: {
              color: action.props.color,
              title: action.props.title,
              content: action.props.content,
            },
          };
        } else return cnote;
      });
      console.log(editList);
      return {
        NoteList: editList,
      };

    default:
      return state;
  }
};
export default AddReducer;
