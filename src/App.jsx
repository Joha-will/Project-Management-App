import NewProject from "./components/NewProject.jsx";
import UnselectedProject from "./components/UnselectedProject.jsx";
import SideBar from "./components/sidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar />
      <UnselectedProject />
    </main>
  );
}

export default App;
