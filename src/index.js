document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key === "Enter");
  apiRequest();
});
document.querySelector("#title").addEventListener("click", () => {
  const input = "beach";
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=30&client_id=zyTfYFabeJb_SrgxxE7PruNkg35A9awKtLPJnFYKOKw";
  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      loadImage(data);
    })
    .catch((error) => console.log(error));
});
function apiRequest() {
  document.querySelector("#grid").textContent = "";
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=30&client_id=zyTfYFabeJb_SrgxxE7PruNkg35A9awKtLPJnFYKOKw";
  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      loadImage(data);
    })
    .catch((error) => console.log(error));
}

function loadImage(data) {
  for (let i = 0; i < data.results.length; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage =
      "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.addEventListener("dblclick", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    document.querySelector("#grid").appendChild(image);
  }
}
