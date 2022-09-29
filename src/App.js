import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Components/Theme";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Partners from "./Components/Partners/Partners";

export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar/>
        <Hero/>
        <Partners/>
      </ThemeProvider>
    </>
  );
}
