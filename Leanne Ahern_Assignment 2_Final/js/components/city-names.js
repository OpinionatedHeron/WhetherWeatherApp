const createCityName = (city) => {

	return `
	<div class="column is-4">
      <section class="card is-clickable has-text-centered has-text-white has-text-weight-bold has-background-black">

        <!-- City Name Header -->
        <header class="card-header">
          <p class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">${city.name}</p>
        </header>

        <a href="/city-focus/?city=${city.name}">

        <!-- Weather Icon Image - icon kept moving when shrunk, added flex to ensure it moved with the site, and justify to ensure it stayed where it was supposed to -->
        <div class="card-image is-flex is-justify-content-center">
          <figure class="image is-128x128 is-centered">
            <img src="/images/sun.png" alt="Weather Icon">
          </figure> 
        </div>

        <!-- Adding temperatures -->
        <article class="card-content is-flex">
          <div class="column is-half">
            <p id="maxTemp" class="content is-size-4">Temp</p>
          </div>
          <div class="column is-half">
            <p id="minTemp" class="content is-size-4">Wind</p>
          </div>
        </article>

        </a>
      </section>
    </div>`
}