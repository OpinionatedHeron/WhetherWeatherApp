const createDailyMax = () => {
	return `
	<div class="column is-one-third is-offset-one-third has-text-centered">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">Max Temp</p>
        </header>
        <article class="card-content is-flex is-justify-content-center">
          <p id="maxTemp" class="is-size-4"></p>
        </article>
      </section>
    </div>


    <div class="column is-one-third has-text-centered">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">Max Wind</p>
        </header>
        <article class="card-content is-flex is-justify-content-center">
          <p id="maxWind" class="content is-size-4"></p>
        </article>
      </section>
    </div>`
}