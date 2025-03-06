import { useSignal } from "@preact/signals";

export const Calculator = () => {
  const result = useSignal(0);
  const x1 = useSignal("");
  const x2 = useSignal("");
  return (
    <div className="card">
      <div className="horisontal">
        <input
          style={{ width: 50 }}
          value={x1.value}
          onChange={(ctx) => x1.value = ctx.currentTarget.value}
        />
        <button
          type="button"
          className="button"
          onClick={() => {
            const [x, y] = [Number(x1.value), Number(x2.value)];
            result.value = x + y;
          }}
        >
          +
        </button>
        <input
          style={{ width: 50 }}
          value={x2.value}
          onChange={(ctx) => x2.value = ctx.currentTarget.value}
        />
      </div>
      <p className="card">{result.value}</p>
    </div>
  );
};
