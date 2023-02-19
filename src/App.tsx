import "./App.css";
import MainRoutes from "./routes/mainRoutes";
import Header from "./components/header";
import FooterComponent from "./components/footer";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="body">
        <MainRoutes></MainRoutes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
