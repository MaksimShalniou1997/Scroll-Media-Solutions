import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import { ProvidePage } from "./components/providePage/ui";
import { Header } from "./components/header";
import { getCustomTheme } from "./theme";
import { Celebrate } from "./components/celebrate";
import { ComeToUs } from "./components/comeToUs";
import { Gallery } from "./components/gallery";
import { Footer } from "./components/footer";

function App() {
  return (
    <ThemeProvider theme={getCustomTheme("#000000", "#FFFFFF")}>
      <Header />
      <Celebrate />
      <ProvidePage />
      <ComeToUs />
      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
