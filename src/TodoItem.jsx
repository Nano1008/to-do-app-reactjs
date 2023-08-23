function TodoItem(props) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {props.item}
      </label>
      <button
        className="btn btn-danger"
        type="submit"
        onClick={function () {
          props.deleteItem(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
