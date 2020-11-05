import "./App.css";
import "./reset.css"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import Game from "./Views/Game";
import Game2 from "./Views/Game2";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Game} />
          <Route path="/game" component={Game2} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
