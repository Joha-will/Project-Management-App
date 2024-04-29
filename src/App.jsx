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

  let content;

  if (showNewProject.selectedProjectId === null) {
    content = < NewProject />;
  } else if (showNewProject.selectedProjectId === undefined) { 
    content = < UnselectedProject onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar onStartAddProject={handleStartProject} />
      {content};
    </main>
  );
}

export default App;
