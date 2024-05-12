document.addEventListener("DOMContentLoaded", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const cityName = urlParams.get("city");

      const city = cities.list().find(item => item.name === cityName);
      document.getElementById("city-name").textContent = city.name;
    });

document.addEventListener("DOMContentLoaded", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const currentCity = urlParams.get('city');
      const dailyData = weatherData[currentCity + "_daily"].daily
      const hourlyData = weatherData[currentCity + "_hourly"].hourly

      const now = dayjs();
      const currentHour = now.hour();

      const maxTemp = dailyData.temperature_2m_max[0];
      document.getElementById("maxTemp").textContent = maxTemp + "°C";

      const maxWind = dailyData.wind_speed_10m_max[0];
      document.getElementById("maxWind").textContent = maxWind + " km/h";

      const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
      console.log(`The index of the current hour: ${indexOfCurrentHour}`)

      const currentTemp = hourlyData.temperature_2m[indexOfCurrentHour];
      document.getElementById("currentTemp").textContent = currentTemp + "°C";

      const currentWind = hourlyData.wind_speed_10m[indexOfCurrentHour];
      document.getElementById("currentWind").textContent = currentWind + " km/h";

      const main = document.querySelector("main");
      for(let i = 0; i < 7; i++){
        const forecast = dayjs().add(i, "day").format("dddd");
        const forecast1 = dailyData.temperature_2m_max[i];
        const forecast2 = dailyData.temperature_2m_min[i];
        const weatherCode = dailyData.weather_code[i];

        main.innerHTML = main.innerHTML + createForecast(forecast, forecast1, forecast2, weatherCode);
      }
});

