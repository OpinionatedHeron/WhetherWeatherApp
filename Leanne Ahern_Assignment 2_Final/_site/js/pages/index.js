document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  cities.list().forEach((city) => {
    main.innerHTML = main.innerHTML + createCityName(city);
  });
});