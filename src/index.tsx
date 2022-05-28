/* @refresh reload */
import "@fontsource/victor-mono"
import { Router } from "solid-app-router"
import { render } from "solid-js/web"
import "virtual:windi.css"
import App from "./App"
import "./index.css"

render(
  () => (
        <Router>
            <App />
        </Router>
  ),
    document.getElementById("root") as HTMLElement
)
