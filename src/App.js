import Header from "./components/Header";
import Home from "./pages/Home";
import PagesRouter from "./routes/PagesRouter";
 function App() {
  return (
    <div className="App">
      <PagesRouter/>
      <Header />
      </div>
  );
}

export default App;
