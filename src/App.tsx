import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { routes } from "./routes";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <h1>React Fetching</h1>
    <hr />
    <Router>
      <nav>
        <ul>
          {routes.map(({ route, title }) => (
            <li>
              <Link to={route}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Switch>
        {routes.map(({ route, component: Component }) => (
          <Route path={route}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  </QueryClientProvider>
);
