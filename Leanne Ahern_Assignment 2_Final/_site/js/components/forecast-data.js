const createForecast = (forecast, forecast1, forecast2, weatherCode) => {

  let weather = "/images/wind.png"
    if(weatherCode === 0){
      weather = "/images/sun.png";
    } else if(weatherCode >= 1 && weatherCode <= 3){
      weather = "/images/sun-clouds.png";
    } else if(weatherCode >= 51 && weatherCode <= 67){
      weather = "/images/rain.png";
    } else if(weatherCode >= 71 && weatherCode <= 77){
      weather = "/images/sleet.png";
    } else if (weatherCode >= 95 && weatherCode <= 99){
      weather = "/images/thunder.png";
    }

  return `
  <div class="column">
  <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
    <header class="card-header">
      <p id="forecast" class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">${forecast}</p>
    </header>

    <div class="card-image is-flex is-justify-content-center">
      <figure class="image is-64x64 is-centered">
        <img src="${weather}" alt="Weather Icon">
      </figure>
    </div>

    <article class="card-content is-flex">
      <div class="column is-half">
        <p id="maxTemp1" class="content is-size-5">${forecast1}°C</p>
      </div>
      <div class="column is-half">
        <p id="minTemp" class="content is-size-5">${forecast2}°C</p>
    </div>
  </section>
</div>`
}