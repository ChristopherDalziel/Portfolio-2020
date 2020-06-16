import database from "../firebase/firebase";

export const createProject = (project) => ({
  type: "CREATE_PROJECT",
  project,
});

export const startCreateProject = (projectData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = "",
      description = "",
      technology = "",
      githubUrl = "",
      url = "",
    } = projectData;
    const project = { name, description, technology, githubUrl, url };
    return database
      .ref(`users/${uid}/projects`)
      .push(project)
      .then((ref) => {
        dispatch(createProject({ id: ref.key, ...project }));
      });
  };
};

export const setProjects = (projects) => ({
  type: "SET_PROJECTS",
  projects,
});

export const startSetProjects = () => {
  return (dispatch) => {
    const uid = process.env.REACT_APP_FIREBASE_ADMIN_ID;
    return database
      .ref(`users/${uid}/projects`)
      .once("value")
      .then((snapshot) => {
        const projects = [];

        snapshot.forEach((childSnapshot) => {
          projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setProjects(projects));
      });
  };
};
