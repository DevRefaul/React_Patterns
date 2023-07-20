export const state = {
  count: 0,
  backgroundColor: "#fff",
};

export const reducer = (state, action) => {
  switch (action) {
    case "Red":
      return { backgroundColor: "#FF0000" };
    case "Green":
      return { backgroundColor: "#008000" };
    case "Black":
      return { backgroundColor: "#000" };

    default:
      state;
  }
};
