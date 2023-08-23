import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {props.items.map(function (item, index) {
          return (
            <TodoItem
              item={item}
              key={index}
              id={index}
              deleteItem={props.deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
