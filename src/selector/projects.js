const getVisibleProjects = (projects, { text }) => {
  return projects.filter((project) => {
    const matchText =
      project.name.toLowerCase().includes(text.toLowerCase()) ||
      project.technology.toLowerCase().includes(text.toLowerCase());

    return matchText;
  });
};

export default getVisibleProjects;
