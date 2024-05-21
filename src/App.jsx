import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import UnselectedProject from "./components/UnselectedProject.jsx";
import SideBar from "./components/sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [showNewProject, setShowNewProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {

    setShowNewProject(prevState => {
      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      
      return {
       ...prevState,
       tasks: [newTask, ...prevState.tasks]
      }
    })

  }

  function handleDeleteTask() {

  }

  function handleSelectedProject(id) {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })

  }

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

  function handleDeleteProject() {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  const selectedProject = showNewProject.projects.find(project => project.id === showNewProject.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject} tasks={showNewProject.tasks} />;

  if (showNewProject.selectedProjectId === null) {
    content = < NewProject onAdd={handleAddProject} onCancel={handleCancelStartProject} />;
  } else if (showNewProject.selectedProjectId === undefined) { 
    content = < UnselectedProject onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar onStartAddProject={handleStartProject} projects={showNewProject.projects} onSelectedProject={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
