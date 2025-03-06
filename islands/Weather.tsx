import { useSignal } from "@preact/signals";

const key = "2fb8211e10e996c2ea62c1b4c0d930f6";
/*let payload = {
  let: "",
  lon: "",
  units: "metric",
  appid: key,
};*/

async function recieveWeather(city: string) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
  );
  const res = await data.json();
  return res;
}

export const Weather = () => {
  const city = useSignal("Moscow");
  const weather = useSignal("any");
  return (
    <div className="card">
      <input
        style={{ width: 100 }}
        value={city.value}
        onChange={(ctx) => city.value = ctx.currentTarget.value}
      />
      <br />
      <button
        type="button"
        className="button"
        onClick={async () => {
          const cur_wtr = await recieveWeather(city.value);
          weather.value = cur_wtr.weather[0].description;
        }}
      >
        get weather
      </button>
      <p className="card">{weather.value}</p>
    </div>
  );
};
