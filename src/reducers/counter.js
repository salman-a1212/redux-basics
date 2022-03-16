const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + parseInt(action.payload);
    case "DECREMENT":
      return state > 0 ? state - parseInt(action.payload) : state;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
