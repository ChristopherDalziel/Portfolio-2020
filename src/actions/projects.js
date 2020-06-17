import database from "../firebase/firebase";

export const createProject = (project) => ({
  type: "CREATE_PROJECT",
  project,
});

export const startCreateProject = (projectData = {}) => {
  return (dispatch) => {
    const {
      name = "",
      description = "",
      technology = "",
      githubUrl = "",
      url = "",
    } = projectData;
    const project = { name, description, technology, githubUrl, url };
    return database
      .ref(`projects`)
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
    return database
      .ref(`projects`)
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
