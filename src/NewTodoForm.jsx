import { useState } from "react";
import TodoList from "./TodoList";

function NewTodoForm() {
  const [newItem, setNewItem] = useState("");
  const [newItems, setNewItems] = useState([]);

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    setNewItems(function (prevItems) {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }

  function deleteItem(id) {
    setNewItems(function (prevItems) {
      return prevItems.filter(function (item, index) {
        return index != id;
      });
    });
  }

  return (
    <div>
      <form className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input type="text" value={newItem} onChange={handleChange} />
        </div>
        <button className="btn" type="submit" onClick={addItem}>
          Add
        </button>
      </form>
      <TodoList items={newItems} deleteItem={deleteItem} />
    </div>
  );
}

export default NewTodoForm;
