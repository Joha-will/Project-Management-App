import NewProject from "./components/NewProject.jsx";
import SideBar from "./components/sidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8">
      <h1 className="my-8 text-center text-5xl font-bold">React Project Manager App</h1>
      <SideBar />
      <NewProject />
    </main>
  );
}

export default App;
