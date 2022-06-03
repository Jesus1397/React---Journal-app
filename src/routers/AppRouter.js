import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="">
        <div className="auth__box-container">
          <Switch>
            <Route path="/" component={JournalScreen} exact />
            <Route path="/auth" component={AuthRouter} />

            <Redirect to="auth/login" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
