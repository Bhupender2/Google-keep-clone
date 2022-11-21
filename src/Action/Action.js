export const Add = (props) => {
  return {
    type: "AddNote",
    payload: {
      id: new Date().getTime().toString(),
      store_content: props,
    },
  };
};
export const Delete = (props) => {
  return {
    type: "DeleteNote",
    id: props,
  };
};

export const EditNote = (props) => {
  return {
    type: "Edit",
    props,
  };
};
