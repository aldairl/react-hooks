import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { SimpleFormCustomHook } from "./02-useEffect/SimpleFormCustomHook";
// import { MultipleCustomHooks } from "./03-multipleCustomHook/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memo/Memorize";
// import { MemorizeHook } from "./06-memo/MemorizeHook";
// import { CallbackHook } from "./06-memo/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import './08-useReducer/intro-reducer'
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
