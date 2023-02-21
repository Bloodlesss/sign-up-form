import MainRoutes from "./routes/mainRoutes";
import Header from "./components/header";
import FooterComponent from "./components/footer";
import style from "./App.module.scss";
function App() {
  return (
    <div className={style.container}>
      <Header></Header>
      <div data-testid={"test-main-routes"} className={style.body}>
        <MainRoutes></MainRoutes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
