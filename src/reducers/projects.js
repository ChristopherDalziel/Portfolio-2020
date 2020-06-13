const projectReducerDefaultState = [];

const projectReducer = (state = projectReducerDefaultState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return [...state, action.project];
    case "SET_PROJECTS":
      return action.projects;
    default:
      return state;
  }
};

export default projectReducer;
