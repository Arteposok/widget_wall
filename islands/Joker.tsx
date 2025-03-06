// deno-lint-ignore-file jsx-button-has-type
import { useSignal } from "@preact/signals";

export const Joker = () => {
  const state = useSignal("");
  return (
    <>
      <p>{state.value}</p>
      <button
        className="button"
        onClick={async () => {
          const future = await fetch("api/joke");
          const result = await future.text();
          state.value = result;
        }}
      >
        make
      </button>
    </>
  );
};
