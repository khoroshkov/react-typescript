import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { todolistPage } from "./pages/todolistPage";
import { aboutPage } from "./pages/aboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={todolistPage} path="/" exact />
          <Route component={aboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
