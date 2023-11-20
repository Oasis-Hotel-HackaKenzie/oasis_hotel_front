import { RoutesMain } from "./routes/routes";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <>
    <Header/>
      <RoutesMain />
      <Footer />
    </>
  );
}

export default App;
