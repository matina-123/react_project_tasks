// import logo from ".src/assets/image.png";
function JSXTasks() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const items = fruits;

  return (
    <>
      {/* Header */}
      <header>
        <img src="./assets/image.png" alt="Logo" width="50" />
        <nav>
          <a href="#">Home</a> | <a href="#">About</a>
        </nav>
      </header>

      {/* Fruit List */}
      <ul>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>

      {/* Conditional */}
      <p>{items.length > 0 ? "Items available" : "No items"}</p>

      {/* JS inside JSX */}
      <p>You have {items.length} items</p>

      {/* Inline Style */}
      <h3 style={{ color: "blue", backgroundColor: "lightgray" }}>
        Inline Styled Text
      </h3>

      {/* Input */}
      <input type="text" placeholder="Enter name" />

      {/* Table */}
      <table border="1">
        <tr>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>C</td>
          <td>D</td>
        </tr>
        <tr>
          <td>E</td>
          <td>F</td>
        </tr>
      </table>

      {/* Date */}
      <p>Date: {new Date().toLocaleDateString()}</p>
    </>
  );
}

export default JSXTasks;