import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import UnselectedProject from "./components/UnselectedProject.jsx";
import SideBar from "./components/sidebar.jsx";

function App() {

  const [showNewProject, setShowNewProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelStartProject() {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(newProject) {
    setShowNewProject(prevState => {
      return {
       ...prevState,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  let content;

  if (showNewProject.selectedProjectId === null) {
    content = < NewProject onAdd={handleAddProject} onCancel={handleCancelStartProject} />;
  } else if (showNewProject.selectedProjectId === undefined) { 
    content = < UnselectedProject onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar onStartAddProject={handleStartProject} projects={showNewProject.projects} />
      {content};
    </main>
  );
}

export default App;
