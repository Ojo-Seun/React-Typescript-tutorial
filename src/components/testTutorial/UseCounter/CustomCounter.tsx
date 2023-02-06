import useCounter from "./useCounter";

function CustomCounter() {
  const { count, Increament, Decreament, Reset } = useCounter(5);
  return (
    <div>
      <h1>{count}</h1>
      <button style={styles} disabled={count === 50} onClick={Increament}>
        Increament
      </button>
      <button style={styles} onClick={Reset}>
        Reset
      </button>
      <button style={styles} disabled={count === 5} onClick={Decreament}>
        Decreament
      </button>
    </div>
  );
}

export default CustomCounter;

const styles = {
  padding: 10,
  backgroundColor: "blue",
  borderRadius: 10,
  border: "none",
  margin: 5,
  color: "white",
  cursor: "pointer",
};
