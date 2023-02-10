let search = document.querySelector("#button-addon2");
let inp = document.querySelector(".form-control");
search.addEventListener("click", () => {
  let title = inp.value;

  if (!inp.value) {
    infoCard.innerHTML = "write a name ";
  } else {
    infoCard.innerHTML = "";
    let url = `https://gogoanime2.p.rapidapi.com/anime-details/${title.replace(
      " ",
      "-"
    )} `;
    getApi(url);
  }
  if (infoCard.children.length > 1) {
    infoCard.innerHTML = "stopit";
  }
});
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0cd36d720cmsha08c21833644722p1ed12ejsnadfb5be146d0",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};
async function getApi(url) {
  const response = await fetch(url, options);
  var data = await response.json();
  readData(data);
}
let infoCard = document.querySelector(".info");
function readData(data) {
  //card
  let card = document.createElement("div");
  card.className = "card";
  card.style.width = "29rem";
  //card image
  let poster = document.createElement("img");
  poster.className = "card-img-top";
  poster.setAttribute("src", `${data.animeImg}`);
  //end img

  // body card && title && summry
  let bCard = document.createElement("div");
  bCard.className = "card-body";
  let animeT = document.createElement("h5");
  animeT.className = "card-title";
  animeT.innerHTML = `${data.animeTitle}::${data.releasedDate} `;
  let animeSummary = document.createElement("p");
  animeSummary.className = "card-text";
  animeSummary.innerHTML = data.synopsis;
  //end body

  //list of items
  let list = document.createElement("ul");
  list.className = "list-group list-group-flush";
  let genre = document.createElement("li");
  genre.className = "list-group-item";
  genre.innerHTML = `the genre : ${data.genres}.`;
  let animeStatus = document.createElement("li");
  animeStatus.className = "list-group-item";
  animeStatus.innerHTML = `this anime is ${data.status} with total of ${data.totalEpisodes} `;
  //end list
  // footer card
  let fCard = document.createElement("div");
  fCard.className = "card-footer";
  let btnCard = document.createElement("a");
  btnCard.className = "btn btn-primary";
  btnCard.innerHTML = "watch it";
  btnCard.setAttribute("href", `watch.html`);
  btnCard.setAttribute("target", `_blank`);
  //end
  fCard.appendChild(btnCard);
  list.appendChild(genre);
  list.appendChild(animeStatus);
  bCard.appendChild(animeT);
  bCard.appendChild(animeSummary);
  card.appendChild(poster);
  card.appendChild(bCard);
  card.appendChild(list);
  card.appendChild(fCard);
  infoCard.appendChild(card);
}
