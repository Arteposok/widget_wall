import { Calculator } from "../islands/Calculator.tsx";
import { Clock } from "../islands/Clock.tsx";
import { Counter } from "../islands/Counter.tsx";
import { Joker } from "../islands/Joker.tsx";
import { Weather } from "../islands/Weather.tsx";

export default function Home() {
  return (
    <div className="flex-strech">
      <div class="flex-center">
        <h1>Demo</h1>
        <Joker />
      </div>
      <div className="grid card">
        <Clock />
        <Weather />
        <Counter />
        <Calculator />
      </div>
    </div>
  );
}
