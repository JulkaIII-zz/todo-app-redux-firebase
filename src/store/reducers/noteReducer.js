const initState = {
  notes: [
    { id: "1", title: "note 1", content: "lalalala" },
    { id: "2", title: "note 1", content: "lalalala" },
    { id: "3", title: "note 1", content: "lalalala" }
  ]
};

const noteReducer = (state = initState, action) => {
  return state;
};

export default noteReducer;
