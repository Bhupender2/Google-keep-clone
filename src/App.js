import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Content/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="2xl-max:flex sm-max:flex-col">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
export default App;
