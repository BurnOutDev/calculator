import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/sora/700.css'
import '@fontsource/sora/400.css'

const theme = extendTheme({
  fonts: {
    heading: 'Sora',
    body: 'Sora',
  },
})

export default theme

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
