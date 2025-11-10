import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
