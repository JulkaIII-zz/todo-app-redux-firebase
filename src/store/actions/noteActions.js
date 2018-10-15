export const createNote = note => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // dispatch - dispatching an action to reducer
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        authorFirstName: "Jonny",
        authorLastName: "Grey",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_NOTE",
          note
        });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NOTE_ERROR", err });
      });
  };
};
