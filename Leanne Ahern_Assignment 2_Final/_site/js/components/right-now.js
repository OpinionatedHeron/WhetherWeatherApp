const createRightNow = (temp, wind) => {
	return `
	<div class="column is-two-thirds is-offset-one-third has-text-centered">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p class="card-header-title is-size-4 has-text-white has-text-weight-bold is-centered">Right Now</p>
        </header>

        <div class="card-content is-flex">
          <div class="column is-half">
            <p class="content is-size-4"><span id="temp">${current.temp}</span></p>
          </div>
          <div class="column is-half">
            <p class="content is-size-4"><span id="wind">${wind}</span></p>  
          </div>
        </div>
      </section>
    </div>`
}