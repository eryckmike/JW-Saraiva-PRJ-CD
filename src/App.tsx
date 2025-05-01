import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/deafault"
import { GlobalStyles } from "./styles/global"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
