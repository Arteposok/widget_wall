import { useSignal } from "@preact/signals";

export const Counter = () => {
  const couter = useSignal(0);
  return (
    <div className="card horisontal">
      <button
        type="button"
        className="button"
        onClick={() => {
          couter.value += 1;
        }}
      >
        +
      </button>
      <p>{couter.value}</p>
      <button
        type="button"
        className="button"
        onClick={() => {
          couter.value -= 1;
        }}
      >
        -
      </button>
    </div>
  );
};
