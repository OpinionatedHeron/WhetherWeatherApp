const createFocusWeatherData = (city) => {
	return `
	<div class="column is-two-thirds is-offset-one-third has-text-centered">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">Right Now</p>
        </header>

        <div class="card-content is-flex">
          <div class="column is-half">
            <p id="current-temp" class="content is-size-4">${hourlyData.temperature_2m[indexOfCurrentHour]}</p>
          </div>
          <div class="column is-half">
            <p id="current-wind" class="content is-size-4">Wind</p>  
          </div>
        </div>
      </section>
    </div>

    <div class="column is-one-third is-offset-one-third has-text-centered">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p id="maxTemp" class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">${todayMaxTemp}</p>
        </header>
        <article class="card-content is-flex is-justify-content-center">
          <p id="temp" class="content is-size-4">12</p>
        </article>
      </section>
    </div>


    <div class="column is-one-third has-text-centered">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p id="maxWind" class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">Max Wind</p>
        </header>
        <article class="card-content is-flex is-justify-content-center">
          <p id="wind" class="content is-size-4">12</p>
        </article>
      </section>
    </div>

    <div class="column is-1">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p id="day" class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">Day</p>
        </header>

        <div class="card-image is-flex is-justify-content-center">
          <figure class="image is-64x64 is-centered">
            <img src="/images/sun.png" alt="Weather Icon">
          </figure>
        </div>

        <article class="card-content is-flex">
          <div class="column is-half">
            <p id="maxTemp" class="content is-size-4">6</p>
          </div>
          <div class="column is-half">
            <p id="minTemp" class="content is-size-4">6</p>
          </div>
        </article>
      </section>
    </div>`
}