// import React, { useContext } from "react";

// import TodoItem from "./TodoItem";
// import { TodosContext } from "../store/todos-context";
// import classes from "./Todos.module.css";

// const Todos: React.FC = () => { // FC = FunctionComponent
//   const todosCtx = useContext(TodosContext);

//   return (
//     <ul className={classes.todos}>
//       {todosCtx.items.map((item) => (
//         <TodoItem
//           key={item.id}
//           id={item.id}
//           text={item.text}
//           onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );
// };

import React from "react";
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
export default Todos;
