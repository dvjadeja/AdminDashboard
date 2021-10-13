import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateSales from "./pages/CreateSales";
import Login from "./pages/Login";
import Sales from "./pages/Sales";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sales/export/create" component={CreateSales} />
          <Route exact path="/sales/export" component={Sales} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
