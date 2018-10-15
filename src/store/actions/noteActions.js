export const createNote = note => {
  return (dispatch, getState) => {
    // dispatch - dispatching an action to reducer
    // here make async call to DB .post()
    dispatch({
      type: "CREATE_NOTE",
      note
    });
  };
};
