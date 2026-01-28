function Box(props) {
  return <div {...props}>Spread Props Box</div>;
}

function SpreadTasks() {
  const config = {
    style: { padding: "10px", backgroundColor: "lightblue" },
    onClick: () => alert("Box Clicked")
  };

  return <Box {...config} />;
}

export default SpreadTasks;