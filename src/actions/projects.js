import database from "../firebase/firebase";

export const createProject = (project) => ({
  type: "CREATE_PROJECT",
  project,
});

export const startCreateProject = (projectData = {}) => {
  return (dispatch, getState) => {
    const { name = "" } = projectData;
    const project = { name };
    return database
      .ref("projects")
      .push(project)
      .then((ref) => {
        dispatch(createProject({ id: ref.key, ...project }));
      });
  };
};

// export const startAddExpense = (expenseData = {}) => {
//   // returning a function, that works only because we are using thunk
//   return (dispatch, getState) => {
//     // Getting the individual uid off from the state so we can send our expense data to the correct place
//     const uid = getState().auth.uid;
//     // Setting up the default object
//     const {
//       description = "",
//       note = "",
//       amount = 0,
//       createdAt = 0,
//     } = expenseData;
//     // Destructor our data
//     const expense = { description, note, amount, createdAt };
//     // Save our data
//     // Using return here is going to allow us to pass on our data to a second promise if required
//     return database
//       .ref(`users/${uid}/expenses`)
//       .push(expense)
//       .then((ref) => {
//         dispatch(
//           addExpense({
//             id: ref.key,
//             ...expense,
//           })
//         );
//       });
//   };
// };
