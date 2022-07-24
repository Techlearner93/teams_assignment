import "./App.css";
import NavLeft from "./Layouts/NavLeft";
import Header from "./Layouts/Header";
import Content from "./Layouts/Content";

function App() {
  return (
    <div className="container">
      <NavLeft />
      <div className="main_content">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
