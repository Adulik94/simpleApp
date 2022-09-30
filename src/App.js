import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Components/Theme";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Partners from "./Components/Partners/Partners";
import Quetes from "./Components/Quetes/Quetes";
import NewPartner from "./Components/NewPartner/NewPartner";
import ManageServices from "./Components/ManageServices/ManageServices";
import Carusel from "./Components/Carusel/Carusel";

export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar/>
        <Hero/>
        <Partners/>
        <Quetes/>
        <NewPartner/>
        <ManageServices/>
        <Carusel/>
      </ThemeProvider>
    </>
  );
}
