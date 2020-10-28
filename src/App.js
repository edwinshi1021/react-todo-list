import Header from "./components/Header/Header";
import TodosOverview from "./components/TodosOverview/TodosOverview";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <TodosOverview />
    </div>
  );
}

export default App;
