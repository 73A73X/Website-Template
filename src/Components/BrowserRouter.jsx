import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;