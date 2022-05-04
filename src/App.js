import HomePage from "./components/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/montserrat";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h2: {
      color: "white",
      textShadow: "1px 1px #2E2E2E",
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 700,
      color: "white",
      textShadow: "1px 1px #2E2E2E",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
