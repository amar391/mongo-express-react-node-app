import React from "react";
import { Provider } from "react-redux";

import Dashboard from "./Dashboard";
import { store } from "../store";

const Main = () => (
    <Provider store={store}>
        <div>
            <Dashboard />
        </div>
    </Provider>
)

export default Main;