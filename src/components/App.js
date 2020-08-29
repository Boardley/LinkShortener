import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import FetchComponent from "./pages/FetchComponent.jsx";

import LightTheme from "../themes/light";

const GlobalStyle = createGlobalStyle`
body {
   background: ${(props) => props.theme.bodyBackgroundColor};
   min-height: 100vh;
   margin: 0;
   color: ${(props) => props.theme.bodyFontColor};
   font-family: 'Kaushan Script'
}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <>
      <ThemeProvider
        theme={{
          ...theme,
          setTheme: () => {
            setTheme((s) => s.id);
          },
        }}
      >
        <GlobalStyle />
        <FetchComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
