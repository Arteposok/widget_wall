import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export const Clock = () => {
  const clock = useSignal(new Date());
  useEffect(
    () => {
      setInterval(
        () => {
          clock.value = new Date();
        },
        1000,
      );
    },
    [],
  );
  return (
    <div className="card">
      <p className="card">time 😁: {clock.value.toLocaleTimeString()}</p>
    </div>
  );
};
