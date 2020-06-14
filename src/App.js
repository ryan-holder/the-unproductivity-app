// Known bugs: no 4k resolution media queries, landing and canvas rendering to many times on input change

// Improvements: adding canvas to state; undo and redo functionality; make touchdraw and draw one function; add filters to memos

import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Todos from "./components/Todos";
import Canvas from "./components/Canvas";
import Memos from "./components/Memos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/todos" component={Todos} />
        <Route path="/canvas" component={Canvas} />
        <Route path="/memos" component={Memos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
