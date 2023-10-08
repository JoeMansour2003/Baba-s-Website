import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Property from "./pages/Property";
import ForSale from "./pages/ForSale";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import ConfirmationPage from "./pages/ConfirmationPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/SEG-React">
                    <Home />
                </Route>
                <Route path="/SEG3125-final">
                    <Home />
                </Route>
                <Route path="/ContactUs">
                    <ContactUs />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Property">
                    <Property />
                </Route>
                <Route path="/ForSale">
                    <ForSale />
                </Route>
                <Route path="/Step1">
                    <Step1 />
                </Route>
                <Route path="/Step2">
                    <Step2 />
                </Route>
                <Route path="/Step3">
                    <Step3 />
                </Route>
                <Route path="/ConfirmationPage">
                    <ConfirmationPage />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
