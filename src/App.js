import React from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Battle from "./components/Battle/Battle.component";

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-center" />
      <Battle />
    </div>
  );
};

export default App;
