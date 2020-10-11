import React from "react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import customTheme from "./customTheme";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div></div>
    </ThemeProvider>
  );
}

export default App;
