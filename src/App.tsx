// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// import NewTodo from "./components/NewTodo";
// import Todos from "./components/Todos";
// import TodosContextProvider from "./store/todos-context";

// function App() {
//   return (
//     <TodosContextProvider>
//       <NewTodo />
//       <Todos />
//     </TodosContextProvider>
//   );
// }

import Todos from "./components/Todos";
function App() {
  return (
    <div>
      <Todos items={["ラテのオシッコ片付ける", "オレオの吐瀉物を片付ける"]} />
    </div>
  );
}
export default App;
